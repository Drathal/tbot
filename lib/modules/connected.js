const { BrowserWindow } = require('electron')
const connection = require('./connection')
const config = require('../config').get()
import { isKnownChannel } from '../utils'

const onConnected = (channel, username, self) => {
  if (!self) {
    return
  }

  if (!isKnownChannel(channel)) {
    return
  }

  BrowserWindow.fromId(1).send('chat', { channel, time: '1:1:1', from: username, message: config.options.botConnectedMessage })
  connection.client.action(channel, config.options.botConnectedMessage)
}

const init = () => connection.client.on('join', onConnected)

module.exports = {
  onConnected,
  init
}
