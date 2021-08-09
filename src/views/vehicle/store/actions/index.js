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

export const getScanVehicle = () => {
  return axios({
    method: 'get',
    url: '/api/vehicle/scan'
  })
}

export const registerVehicle = (data) => {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/api/vehicle/register',
      data
    }).then(res => {
      dispatch(getVehicle())
    })
  }
}