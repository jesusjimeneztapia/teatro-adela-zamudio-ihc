import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function getSchedules(eventId) {
  const schedulesCollection = collection(db, `Eventos/${eventId}/Schedules`)
  const schedulesDocs = await getDocs(schedulesCollection)
  const { docs } = schedulesDocs

  let schedules = []

  for(let i = 0; i < docs.length; i++) {
    const id = docs[i].id
    const { Day, DayNumber } = docs[i].data()
    const hoursCollection = collection(db, `Eventos/${eventId}/Schedules/${id}/Hours`)
    const hoursDocs = await getDocs(hoursCollection)
    const hours = hoursDocs.docs.map((doc) => {
      const { Hour } = doc.data()
      return { id: doc.id, hour: Hour }
    })
    schedules = [...schedules, { day: Day, dayNumber: DayNumber, id, hours }]
  }

  return schedules
}