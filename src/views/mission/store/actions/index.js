import axios from 'axios'

export const getMission = params => {
  return dispatch => {
    axios({
      url: '/api/mission',
      method: 'get',
      params
    }).then(response => {
      dispatch({
        type: 'GET_MISSION',
        data: response.data,
        params
      })
    })
  }
}

export const deleteMission = id => {
  return (dispatch, getStore) => {
    axios({
      url: `/api/mission/${id}`,
      method: 'delete'
    }).then(response => {
      dispatch({
        type: 'DELETE_MISSION'
      })
    })
    .then(() => dispatch(getMission(getStore().mission.params)))
  }
}