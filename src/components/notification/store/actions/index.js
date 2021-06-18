export const setError = (message)  => {
  return {
    type: 'SET_ERROR',
    message
  }
}

export const hide = ()  => {
  return {
    type: 'HIDE'
  }
}


export const setSuccess = (message)  => {
  return {
    type: 'SET_SUCCESS',
    message
  }
}