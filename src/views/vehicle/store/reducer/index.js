const initialState = {
  data: [],
  count: 1,
  params: {},
  status: 0
}

export const vehicle = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VEHICLE':
      return {
        ...state,
        data: action.data
      }
    default:
      return { ...state }
  }
}

export const vehicleGroup = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VEHICLE_TYPE':
      return {
        ...state,
        data: action.data
      }
    default:
      return { ...state }
  }
}
