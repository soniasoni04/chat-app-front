import { combineReducers } from 'redux'
import messages from './message'
import user from './user'

export default combineReducers({
  messages,
  user
})