import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { createContext, useContext, useReducer } from 'react'
import { auth } from '../../firebase/firebaseConfig'
import { providerSignIn } from './auth'
import { authFormReducer, AUTH_FORM_INITIAL_STATE } from './reducers'

const AuthFormContext = createContext({
  ...AUTH_FORM_INITIAL_STATE,
  toggleIsLogin() {},
  handleChange({ target: { name, value } }) {},
  async handleSubmit(e) {},
  signIn(provider) {}
})

export function useAuthForm() {
  const authFormContext = useContext(AuthFormContext)
  return authFormContext
}

function useAuthFormProvider() {
  const [authForm, dispatchAuthForm] = useReducer(authFormReducer, AUTH_FORM_INITIAL_STATE)

  const toggleIsLogin = () => {
    const { isLogin } = authForm
    dispatchAuthForm({ type: 'setIsLogin', payload: !isLogin })
  }

  const handleChange = ({ target: { name, value } }) => {
    dispatchAuthForm({ type: 'setDataUser', payload: { property: name, value } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { isLogin, email, password } = authForm
    return isLogin? 
      await signInWithEmailAndPassword(auth, email, password):
      await createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (provider) => async () => {
    await providerSignIn(provider)
  }

  return { ...authForm, toggleIsLogin, handleChange, handleSubmit, signIn }
}

export function AuthFormProvider({ children }) {
  const authFormProviderValue = useAuthFormProvider()

  return (
    <AuthFormContext.Provider value={authFormProviderValue}>
      {children}
    </AuthFormContext.Provider>
  )
}