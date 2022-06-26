import { SCHEDULE_ACTIONS } from './actions'

export const SCHEDULE_INITIAL_STATE = {
  isLoading: true,
  eventId: null,
  schedules: [],
  hours: [],
  scheduleId: null,
  day: {
    name: null,
    number: null
  },
  hourId: null,
  hour: null
}

export function scheduleReducer(state, { type, payload }) {
  const action = SCHEDULE_ACTIONS[type]
  return action? action(state, payload): { ...state }
}