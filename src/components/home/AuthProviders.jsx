import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { useAuthForm } from './providers'
import ProviderButton from './ProviderButton'

export default function AuthProviders() {
  const { isLogin, signIn } = useAuthForm()

  return (
    <div className='d-flex flex-column gap-2'>
      <h3>{`${isLogin? 'Inicia Sesión': 'Regístrate'}`} con</h3>
      <ProviderButton provider={GoogleAuthProvider.PROVIDER_ID} onClick={signIn(GoogleAuthProvider.PROVIDER_ID)} />
      <ProviderButton provider={FacebookAuthProvider.PROVIDER_ID} onClick={signIn(FacebookAuthProvider.PROVIDER_ID)} />
    </div>
  )
}
