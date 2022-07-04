import { createContext, useContext, useEffect, useReducer } from 'react'
import { authReducer, AUTH_INITIAL_STATE } from '../reducers/authReducer'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { saveUser, setRecentSearches } from '../../services/userService'

const AuthContext = createContext({
  ...AUTH_INITIAL_STATE,
  async logOut() {},
  async updateRecentSearches({ id, title, gender }) {}
})

export function useAuth() {
  const authContext = useContext(AuthContext)
  return authContext
}

function useAuthProvider() {
  const [state, dispatchState] = useReducer(authReducer, AUTH_INITIAL_STATE)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user
        let credentials = {
          id: uid,
          email,
          photoURL: photoURL ?? `https://i.pravatar.cc/150?u=${displayName ?? email}`,
          displayName: displayName ?? email.split('@')[0]
        }
        credentials = await saveUser(credentials)
        dispatchState({ type: 'setCredentials', payload: credentials })
      }
    })

    return () => unsubscribe()
  }, [])

  const logOut = async () => {
    await signOut(auth)
    dispatchState({ type: 'logOut' })
  }

  const updateRecentSearches = async ({ id, title, gender }) => {
    const recentSearches = await setRecentSearches(state.id, state.recentSearches, { id, title, gender })
    dispatchState({ type: 'setRecentSearches', payload: recentSearches })
  }

  return { ...state, logOut, updateRecentSearches }
}

export default function AuthProvider({ children }) {
  const authProviderValue = useAuthProvider()

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  )
}