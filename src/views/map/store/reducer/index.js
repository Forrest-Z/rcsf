const initialState = {
  data: [],
  count: 1,
  params: {},
  status: 0
}

const maps = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MAP':
      return {
        ...state,
        data: action.data.results,
        count: action.data.count,
        params: action.params
      }
    case 'ADD_MAP':
      console.log(action)
      return {
        ...state,
        data: action.data
      }
    default:
      return { ...state }
  }
}

export default maps