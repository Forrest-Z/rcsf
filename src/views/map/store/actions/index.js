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
    .then(() => dispatch(getMap(getStore().maps.params)))
  }
}

export const addMap = data => {
  return (dispatch, getStore) => {
    axios({
      url: `/api/map`,
      method: 'post',
      data
    }).then(response => {
      if (response.status !== 201) {

      } else {
        dispatch({type: 'SET_SUCCESS', message: 'Success upload'})
      }
      dispatch({
        type: 'ADD_MAP',
        data: response.data,
        status: response.status
      })
    })
    .catch(error => {
      console.log(error)
    })
    .then(() => dispatch(getMap(getStore().maps.params)))
  }
}

export const multiDelete = ids => {
  return (dispatch, getStore) => {
    axios({
      url: `/api/map/multi_delete?deleteid=${ids}`,
      method: 'delete'
    }).then(response => {
      dispatch({
        type: 'DELETE_MAP'
      })
    })
    .then(() => dispatch(getMap(getStore().maps.params)))
  }
}

export const updateMap = (id, data) => {
  return (dispatch, getStore) => {
    axios({
      url: `/api/map/${id}`,
      method: 'put',
      data
    }).then(response => {
      dispatch({
        type: 'UPDATE_MAP'
      })
    })
    .then(() => dispatch(getMap(getStore().maps.params)))
  }
}