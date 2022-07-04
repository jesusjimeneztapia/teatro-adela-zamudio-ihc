import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

export async function getSchedules(eventId) {
  const schedulesCollection = collection(db, `Eventos/${eventId}/Schedules`)
  const schedulesDocs = await getDocs(schedulesCollection)
  const { docs } = schedulesDocs

  let schedules = []

  for(let i = 0; i < docs.length; i++) {
    const id = docs[i].id
    const { date } = docs[i].data()
    const hoursCollection = collection(db, `Eventos/${eventId}/Schedules/${id}/Hours`)
    const hoursDocs = await getDocs(hoursCollection)
    const hours = hoursDocs.docs.map((doc) => {
      const { Hour } = doc.data()
      return { id: doc.id, hour: Hour }
    }).sort(({hour: hour1}, {hour: hour2}) => new Date(`${date}-${hour1}`) - new Date(`${date}-${hour2}`))

    const d = new Date(date)
    const day = d.toLocaleDateString('es-ES', {
      weekday: 'short'
    })
    const dayNumber = d.toLocaleDateString('es-ES', {
      day: '2-digit'
    })
    schedules = [...schedules, { day, dayNumber, id, hours, date }]
  }

  return schedules.sort(({ date: date1 }, { date: date2 }) => new Date(date1) - new Date(date2))
}