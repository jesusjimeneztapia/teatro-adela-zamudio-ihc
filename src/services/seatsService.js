import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'

const POSITIONS = {
  A: '0',
  B: '1',
  C: '2',
  D: '3',
  E: '4',
  F: '5',
  G: '6',
  H: '7',
  I: '8'
}

export async function setPlaceState({ userName, eventId, scheduleId, hourId, row, placeName, action = 'toggle' }) {
  const rowName = placeName.at(-1)
  const id = POSITIONS[rowName]
  const rowDoc = doc(db, `Eventos/${eventId}/Schedules/${scheduleId}/Hours/${hourId}/Seats`, id)
  const currentRow = await getDoc(rowDoc)

  const { places, ...rest } = currentRow.data()
  const placeIndex = row.findIndex((place) => placeName === place.name)
  const currentState = row[placeIndex].state

  places[placeIndex] = action === 'toggle'?
                        currentState === 'available'? `${userName};reserved;${Date.now()}`: true
                        : `${userName};${newState};${Date.now()}`

  await setDoc(rowDoc, { ...rest, places })
  return places[placeIndex]
}
