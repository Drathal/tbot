import { client } from './connection'

const { BrowserWindow } = require('electron')

const onAction = (channel, userstate, message, self) => {
  BrowserWindow.fromId(1).send('chat', {
    channel,
    time: '1:1:1',
    from: 'username',
    message: 'message'
  })
}

const init = () => client.on('action', onAction)

module.exports = {
  onAction,
  init
}
