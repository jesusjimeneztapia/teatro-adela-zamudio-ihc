export const AUTH_FORM_ACTIONS = {
  setIsLogin: (state, isLogin) => {
    return { ...state, isLogin }
  },
  setDataUser: (state, { property, value }) => {
    return { ...state, [property]: value }
  }
}