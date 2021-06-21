const initialState = {
  message: '',
  error: false,
  isOpen: false
}

const notification = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        message: action.message,
        error: true,
        isOpen: true
      }
    case 'HIDE':
      return {
        ...state,
        message: '',
        error: false,
        isOpen: false
      }
    case 'SET_SUCCESS':
      return {
        ...state,
        message: action.message,
        error: false,
        isOpen: true
      }
    default:
      return { ...state }
  }
}

export default notification