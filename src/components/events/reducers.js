import { EVENTS_ACTIONS } from './actions'

export const EVENTS_INITIAL_STATE = {
  isLoading: true,
  events: [],
  filteredEvents: []
}

export function eventsReducer(state, { type, payload }) {
  const action = EVENTS_ACTIONS[type]
  return action? action(state, payload): { ...state }
}