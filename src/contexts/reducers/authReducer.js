import { AUTH_ACTIONS } from '../actions/authActions'

export const AUTH_INITIAL_STATE = {
  logged: false,
  id: null,
  email: null,
  photoURL: null,
  displayName: null,
  recentSearches: []
}

export function authReducer(state, { type, payload }) {
  const action = AUTH_ACTIONS[type]
  return action? action(state, payload): { ...state }
}