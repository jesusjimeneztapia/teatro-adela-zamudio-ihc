import { SEATS_ACTIONS } from './actions'

export const SEATS_INITIAL_STATE = {
  isLoading: true,
  eventId: null,
  scheduleId: null,
  hourId: null,
  day: {
    name: null,
    number: null
  },
  scenary: {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: []
  },
  selected: []
}

export function seatsReducer(state, { type, payload }) {
  const action = SEATS_ACTIONS[type]
  return action? action(state, payload): { ...state }
}