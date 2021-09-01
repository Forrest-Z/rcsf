import axios from 'axios'

// 获取当前用户的首页配置
export const getUserDashboardConfig = () => {
  return axios({
    url: '/api/account/profile', // /api​/account​/profile
    method: 'get'
  })
  // return (dispatch) => {
  //   axios({
  //     url: '/api/account/profile', // /api​/account​/profile
  //     method: 'get'
  //   }).then((response) => {
  //     dispatch({
  //       type: 'GET_User_Dashboard_Config',
  //       data: response.data
  //     })
  //   })
  // }
}

// 设置当前用户首页配置
export const setUserDashboardConfig = ({ id, data }) => {
  // return (dispatch) => {
  //   axios({
  //     url: `/api/account/profile/${id}`,
  //     method: 'put',
  //     data
  //   }).then((response) => {
  //     dispatch({
  //       type: 'SET_User_Dashboard_Config',
  //       data: response.data
  //     })
  //   })
  // }
  return axios({
    url: `/api/account/profile/${id}`,
    method: 'put',
    data
  })
}
