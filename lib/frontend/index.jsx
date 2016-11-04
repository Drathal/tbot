import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './container/root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

import { ipcRenderer } from 'electron'
import { addChatMessage } from './reducer/chat/actions'

ipcRenderer.on('chat', (event, payload) => {
  store.dispatch(addChatMessage(payload.channel, payload.from, payload.message, payload.time))
})

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
