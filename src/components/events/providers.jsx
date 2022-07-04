import { createContext, useContext, useReducer, useState } from 'react'
import { getEvents } from '../../services/eventsService'
import { eventsReducer, EVENTS_INITIAL_STATE } from './reducers'

const EventsContext = createContext({
  ...EVENTS_INITIAL_STATE,
  filterEvents(gender) {}
})

export function useEvents() {
  const eventsContext = useContext(EventsContext)
  return eventsContext
}

function useEventsProvider() {
  const [state, dispatchState] = useReducer(eventsReducer, EVENTS_INITIAL_STATE)

  useState(() => {
    const request = async () => {
      const events = await getEvents()
      dispatchState({ type: 'setEvents', payload: events })
    }

    request()
  }, [])

  const filterEvents = (gender) => {
    const { events } = state
    const filteredEvents = events.filter((event) => gender === event.gender)
    dispatchState({ type: 'filteredEvents', payload: filteredEvents })
  }

  return { ...state, filterEvents }
}

export function EventsProvider({ children }) {
  const eventsProviderValue = useEventsProvider()

  return (
    <EventsContext.Provider value={eventsProviderValue}>
      {children}
    </EventsContext.Provider>
  )
}