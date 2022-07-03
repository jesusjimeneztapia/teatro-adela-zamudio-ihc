import { createContext, useContext, useEffect, useReducer } from 'react'
import { authReducer, AUTH_INITIAL_STATE } from '../reducers/authReducer'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import { saveUser } from '../../services/userService'

const AuthContext = createContext({
  ...AUTH_INITIAL_STATE,
  async logOut() {}
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
        const credentials = {
          id: uid,
          email,
          photoURL: photoURL ?? `https://i.pravatar.cc/150?u=${displayName ?? email}`,
          displayName: displayName ?? email.split('@')[0]
        }
        dispatchState({ type: 'setCredentials', payload: credentials })
        saveUser(credentials)
      }
    })

    return () => unsubscribe()
  }, [])

  const logOut = async () => {
    await signOut(auth)
    dispatchState({ type: 'logOut' })
  }

  return { ...state, logOut }
}

export default function AuthProvider({ children }) {
  const authProviderValue = useAuthProvider()

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  )
}