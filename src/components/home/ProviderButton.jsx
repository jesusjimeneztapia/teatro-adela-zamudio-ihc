import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { Button } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

const PROVIDERS = {
  [GoogleAuthProvider.PROVIDER_ID]: {
    text: 'Google',
    variant: 'light',
    icon: <FcGoogle />
  },
  [FacebookAuthProvider.PROVIDER_ID]: {
    text: 'Facebook',
    variant: 'primary',
    icon: <BsFacebook />  
  }
}

export default function ProviderButton({ provider, onClick }) {
  const { text, variant, icon } = PROVIDERS[provider]

  return (
    <Button
      className='d-flex justify-content-center fw-semibold align-items-center gap-2 shadow-sm w-100'
      variant={variant}
      size='lg'
      onClick={onClick}
    >
      {icon}
      {text}
    </Button>
  )
}
