// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import maps from '@src/views/map/store/reducer'
import { vehicle, vehicleGroup } from '@src/views/vehicle/store/reducer'
import mission from '@src/views/mission/store/reducer'
import notification from '@src/components/notification/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  maps,
  mission,
  vehicle,
  vehicleGroup,
  notification
})

export default rootReducer
