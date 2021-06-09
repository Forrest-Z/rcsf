const initialState = {
  data: [],
  count: 1,
  params: {}
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MAP':
      console.log(action.params)
      return {
        ...state,
        data: action.data.results,
        count: action.data.count,
        params: action.params
      }
    default:
      return {...state }
  }
}

export default mapReducer