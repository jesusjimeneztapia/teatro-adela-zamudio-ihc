import { AUTH_INITIAL_STATE } from '../reducers/authReducer'

export const AUTH_ACTIONS = {
  setCredentials: (state, credentials) => {
    return { ...state, ...credentials, logged: true }
  },
  logOut: () => {
    return AUTH_INITIAL_STATE
  }
}