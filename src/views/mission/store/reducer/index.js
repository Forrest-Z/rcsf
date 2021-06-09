const initialState = {
  data: [],
  count: 1,
  params: {}
}

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MISSION':
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

export default missionReducer