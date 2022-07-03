import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function saveUser({ id, ...rest }) {
  const userDoc = doc(db, 'users', id)
  const user = await getDoc(userDoc)

  if (!user.exists()) {
    await setDoc(userDoc, rest)
  }
}