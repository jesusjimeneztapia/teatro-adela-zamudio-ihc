export const SEATS_ACTIONS = {
  setScenary: (state, scenary) => {
    return { ...state, scenary, isLoading: false }
  },
  update: (state, selected) => {
    return { ...state, selected }
  }
}