import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './container/app'
import Start from './container/start'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Start} />
    <Route path="/counter" component={Start} />
  </Route>
)
