import { createStore, compose } from 'redux'
import rootReducer from '../reducer'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose()
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(require('./reducer').default))
  }

  return store
}

export default configureStore
