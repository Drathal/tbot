import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware()
)

export default configureStore
