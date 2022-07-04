import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/providers/AuthProvider'
import { setPlaceState } from '../../services/seatsService'
import { seatsReducer, SEATS_INITIAL_STATE } from './reducers'

const SeatsContext = createContext({
  ...SEATS_INITIAL_STATE,
  setScenary(scenary) {},
  async togglePlace(placeName) {}
})

export function useSeats() {
  const seatsContext = useContext(SeatsContext)
  return seatsContext
}

function useSeatsProvider() {
  const { eventId } = useParams()
  const { state: { scheduleId, hourId, day } } = useLocation()
  const { logged, displayName } = useAuth()
  const [seats, dispatchSeats] = useReducer(seatsReducer, SEATS_INITIAL_STATE)

  useEffect(() => {
    let selected = []
    Object.values(seats.scenary).forEach(row => {
      selected = [...selected, ...row.filter(({ userName }) => !userName? false: displayName === userName)]
    })
    dispatchSeats({ type: 'update', payload: selected })
  }, [seats.scenary, logged])

  const setScenary = (scenary) => {
    dispatchSeats({ type: 'setScenary', payload: scenary })
  }

  const togglePlace = async (placeName) => {
    const row = placeName.at(-1)
    const { scenary } = seats
    const { state, userName } = scenary[row].find(({ name }) => placeName === name)
    if (logged && state !== 'bought') {
      if (state === 'available' || displayName === userName) {
        await setPlaceState({ 
          eventId,
          hourId,
          placeName,
          row: scenary[row],
          scheduleId,
          userName: displayName,
        })
      }
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