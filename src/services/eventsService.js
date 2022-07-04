import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function getEvents() {
  const eventsCollection = collection(db, 'Eventos')
  const events = await getDocs(eventsCollection)
  const { docs } = events

  return docs.map((doc) => {
    const data = doc.data()
    const { Description, Duration, Gender, ImageURL, Premiere, PresentedBy, Title } = data
    const premiere = new Date(Premiere).toLocaleString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

    return {
      id: doc.id,
      description: Description,
      duration: Duration,
      gender: Gender,
      imageURL: ImageURL,
      presentedBy: PresentedBy,
      premiere,
      title: Title,
      date: Premiere
    }
  }).sort((a, b) => new Date(a.date) - new Date(b.date))
}