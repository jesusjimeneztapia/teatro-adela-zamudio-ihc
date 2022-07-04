export const EVENTS_ACTIONS = {
  setEvents: (state, events) => {
    return { ...state, events, filteredEvents: events, isLoading: false }
  },
  setFilteredEvents: (state, { gender, filteredEvents }) => {
    return { ...state, gender, filteredEvents }
  },
  setSearch: (state, { search, autocompleteSearches }) => {
    return { ...state, search, autocompleteSearches }
  },
  resetSearch: (state) => {
    return { ...state, search: '', autocompleteSearches: [] }
  },
  setSuggestedSearches: (state, { suggestedSearches, autocompleteSearches }) => {
    return { ...state, suggestedSearches, autocompleteSearches }
  },
  selectSearch: (state, { search, filteredEvents }) => {
    return { ...state, search, filteredEvents }
  }
}