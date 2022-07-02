import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { seatsReducer, SEATS_INITIAL_STATE } from './reducers'

const SeatsContext = createContext({
  ...SEATS_INITIAL_STATE,
  setScenary(scenary) {},
  togglePlace(placeName) {}
})

export function useSeats() {
  const seatsContext = useContext(SeatsContext)
  return seatsContext
}

function useSeatsProvider() {
  const { eventId } = useParams()
  const { state: { scheduleId, hourId, day } } = useLocation()
  const [seats, dispatchSeats] = useReducer(seatsReducer, SEATS_INITIAL_STATE)

  const setScenary = (scenary) => {
    dispatchSeats({ type: 'setScenary', payload: scenary })
  }

  const togglePlace = (placeName) => {
    const row = placeName.at(-1)
    const { id, state } = seats.scenary[row].find(({ name }) => placeName === name)
    if (state !== 'occupied') {
      const { selected, scenary } = seats
      let selectedUpdated = []
      if (state === 'selected') {
        selectedUpdated = selected.filter((place) => id !== place.id)
      } else {
        selectedUpdated = [...selected, { id, name: placeName, state: 'occupied' }]
      }
      const places = scenary[row]
      const placeIndex = places.findIndex((place) => id === place.id)
      places[placeIndex] = { id, name: placeName, state: state === 'selected'? 'available': 'selected' }

      dispatchSeats({ type: 'update', payload: { scenary: {...scenary, [row]: places}, selected: selectedUpdated } })
    }
  }

  return { ...seats, eventId, scheduleId, hourId, day, setScenary, togglePlace }
}

export function SeatsProvider({ children }) {
  const seatsProviderValue = useSeatsProvider()

  return (
    <SeatsContext.Provider value={seatsProviderValue}>
      {children}
    </SeatsContext.Provider>
  )
}