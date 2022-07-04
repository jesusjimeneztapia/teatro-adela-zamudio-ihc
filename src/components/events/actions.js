export const EVENTS_ACTIONS = {
  setEvents: (state, events) => {
    return { ...state, events, filteredEvents: events, isLoading: false }
  },
  setFilteredEvents: (state, { gender, filteredEvents }) => {
    return { ...state, gender, filteredEvents }
  }
}