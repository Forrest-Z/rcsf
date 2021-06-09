// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import map from '@src/views/map/store/reducer'
import mission from '@src/views/mission/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  map,
  mission
})

export default rootReducer
