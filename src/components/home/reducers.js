import { AUTH_FORM_ACTIONS } from './actions'

export const AUTH_FORM_INITIAL_STATE = {
  isLogin: true,
  email: '',
  password: ''
}

export function authFormReducer(state, { type, payload }) {
  const action = AUTH_FORM_ACTIONS[type]
  return action? action(state, payload): { ...state }
}