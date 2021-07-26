const initialState = {
  data: [],
  count: 1,
  params: {},
  status: 0
}

const vehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VEHICLE':
      console.log(action.data)
      return {
        ...state,
        data: action.data
      }
    default:
      return { ...state }
  }
}

export default vehicle