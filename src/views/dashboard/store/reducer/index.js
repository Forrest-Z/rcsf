const initialState = {
  data: [],
  params: {},
  status: 0
}

const dashboardConfig = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_User_Dashboard_Config':
      return {
        ...state,
        data: action.data.results,
        params: action.params
      }
    case 'SET_User_Dashboard_Config':
      return {
        ...state,
        data: action.data
      }
    default:
      return { ...state }
  }
}

export default dashboardConfig
