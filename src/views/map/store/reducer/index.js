const initialState = {
  data: [],
  total: 1,
  params: {}
}

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MAP':
      console.log(action.params)
      return {
        ...state,
        data: action.data.results,
        params: action.params
      }
    default:
      return {...state }
  }
}

export default mapReducer