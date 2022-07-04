export const EVENTS_ACTIONS = {
  setEvents: (state, events) => {
    return { ...state, events, filteredEvents: events }
  },
  setFilteredEvents: (state, filteredEvents) => {
    return { ...state, filteredEvents }
  }
}