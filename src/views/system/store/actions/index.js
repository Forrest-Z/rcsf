import axios from 'axios'

export const getSystemSettings = (params) => {
  return axios({
    method: 'get',
    url: '/api/system-setting',
    params
  })
}

export const setSystemSettings = data => {
  return axios({
    method: 'put',
    url: '/api/system-setting/update/',
    data
  })
}