import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function saveUser({ id, ...rest }) {
  const userDoc = doc(db, 'users', id)
  const user = await getDoc(userDoc)

  let recentSearches = []

  if (!user.exists()) {
    await setDoc(userDoc, rest)
  } else {    
    const recentSearchesCollection = collection(db, `users/${id}/recentSearches`)
    const { docs } = await getDocs(recentSearchesCollection)
    recentSearches = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                      .sort(({ createdAt: createdAt1 }, { createdAt: createdAt2 }) => new Date(createdAt2) - new Date(createdAt1))
  }

  return {
    id,
    ...rest,
    recentSearches
  }
}

export async function setRecentSearches(id, recentSearches, newSearch) {
  recentSearches = recentSearches.filter(({ id }) => id !== newSearch.id)
  const createdAt = Date.now()
  if (!!id) {
    await deleteDoc(doc(db, `users/${id}/recentSearches`, newSearch.id))
    if (recentSearches.length === 4) {
      const lastId = recentSearches.at(-1).id
      await deleteDoc(doc(db, `users/${id}/recentSearches`, lastId))
    }
    const searchDoc = doc(db, `users/${id}/recentSearches`, newSearch.id)
    const { title, gender } = newSearch
    const createdAt = Date.now()
    await setDoc(searchDoc, {
      title,
      gender,
      createdAt
    })
  }
  recentSearches = [{ ...newSearch, createdAt }, ...recentSearches]
  return recentSearches.slice(0, 4)
}