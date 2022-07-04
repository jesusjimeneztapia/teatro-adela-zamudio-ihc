import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { useAuth } from '../../contexts/providers/AuthProvider'
import { getEvents } from '../../services/eventsService'
import { eventsReducer, EVENTS_INITIAL_STATE } from './reducers'

const EventsContext = createContext({
  ...EVENTS_INITIAL_STATE,
  filterEvents(gender) {},
  setSearch({ target: { value } }) {},
  searchEvent({ id, title, gender }) {},
  resetSearch() {}
})

export function useEvents() {
  const eventsContext = useContext(EventsContext)
  return eventsContext
}

function useEventsProvider() {
  const { recentSearches, updateRecentSearches } = useAuth()
  const [state, dispatchState] = useReducer(eventsReducer, EVENTS_INITIAL_STATE)

  useEffect(() => {
    const request = async () => {
      const events = await getEvents()
      dispatchState({ type: 'setEvents', payload: events })
    }

    request()
  }, [])

  useEffect(() => {
    const [first, second] = recentSearches
    let suggestedSearches = []
    let autocompleteSearches = []
    const { events } = state
    if (first) {
      const { gender, id } = first
      suggestedSearches = events.filter((event) => gender === event.gender && id !== event.id)
    }
    if (second && second.gender !== first.gender) {
      const { gender, id } = second
      suggestedSearches = [
        ...suggestedSearches, 
        ...events.filter((event) => gender === event.gender && id !== event.id)
      ]
    }
    suggestedSearches = suggestedSearches.slice(0, 4)
    const { search } = state
    if (search !== '') {
      const { events } = state
      const regExp = new RegExp(search.toLowerCase())
      autocompleteSearches = events.filter(({ title }) => regExp.test(title.toLowerCase())).slice(0, 4)
    }
    dispatchState({ type: 'setSuggestedSearches', payload: { suggestedSearches, autocompleteSearches } })
  }, [state.events, state.search, recentSearches])

  const filterEvents = (gender) => {
    const { events } = state
    const filteredEvents = gender === 'Todos'? events: events.filter((event) => gender === event.gender)
    dispatchState({ type: 'setFilteredEvents', payload: {gender, filteredEvents} })
  }

  const setSearch = ({ target: { value: search } }) => {
    let autocompleteSearches = []
    if (search !== '') {
      const { events } = state
      const regExp = new RegExp(search.toLowerCase())
      autocompleteSearches = events.filter(({ title }) => regExp.test(title.toLowerCase())).slice(0, 4)
    }

    dispatchState({ type: 'setSearch', payload: { search, autocompleteSearches } })
  }

  const searchEvent = ({ id, title, gender }) => {
    const { events } = state
    const regExp = new RegExp(title.toLowerCase())
    const filteredEvents = events.filter((event) => regExp.test(event.title.toLowerCase()))
    dispatchState({ type: 'selectSearch', payload: { search: title, filteredEvents } })
    updateRecentSearches({ id, gender, title })
  }

  const resetSearch = () => {
    const { events } = state
    dispatchState({ type: 'setSearch', payload: { search: '', autocompleteSearches: [] } })
    dispatchState({ type: 'setFilteredEvents', payload: { gender: 'Todos', filteredEvents: events } })
  }

  return { ...state, filterEvents, setSearch, searchEvent, resetSearch }
}

export function EventsProvider({ children }) {
  const eventsProviderValue = useEventsProvider()

  return (
    <EventsContext.Provider value={eventsProviderValue}>
      {children}
    </EventsContext.Provider>
  )
}