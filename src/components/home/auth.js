import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'

const PROVIDERS = {
  [GoogleAuthProvider.PROVIDER_ID]: new GoogleAuthProvider(),
  [FacebookAuthProvider.PROVIDER_ID]: new FacebookAuthProvider()
}

export async function providerSignIn(id) {
	return await signInWithPopup(auth, PROVIDERS[id])
}