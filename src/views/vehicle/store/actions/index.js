import axios from 'axios'

export const getVehicle = params => {
  return dispatch => {
    return axios({
      method: 'get',
      url: '/api/vehicle',
      params
    }).then(res => {
      dispatch({ type: 'GET_VEHICLE', data: res.data, params })
    })
  }
}