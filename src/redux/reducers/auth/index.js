// **  Initial State
const initialState = {
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.data,
        [action.config.storageAccessKeyName]: action[action.config.storageAccessKeyName],
        [action.config.storageRefreshTokenKeyName]: action[action.config.storageRefreshTokenKeyName]
      }
    case 'LOGOUT':
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }
    default:
      return state
  }
}

export default authReducer
