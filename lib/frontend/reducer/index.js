import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import chatReducer from './chat'

export default combineReducers({
  chat: chatReducer,
  routing: routerReducer
})
