import axios from 'axios'

export const getMap = params => {
  return dispatch => {
    axios({
      url: '/api/map',
      method: 'get',
      params
    }).then(response => {
      dispatch({
        type: 'GET_MAP',
        data: response.data,
        params
      })
    })
  }
}

export const deleteMap = id => {
  return (dispatch, getStore) => {
    axios({
      url: `/api/map/${id}`,
      method: 'delete'
    }).then(response => {
      dispatch({
        type: 'DELETE_MAP'
      })
    })
    .then(() => dispatch(getMap(getStore().map.params)))
  }
}