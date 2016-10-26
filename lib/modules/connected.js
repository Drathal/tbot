import { getClient } from './connection'
const config = require('../config').get()
import { isKnownChannel } from '../utils'

const onConnected = (channel, username, self) => {
  if (!self) {
    return
  }

  if (!isKnownChannel(channel)) {
    return
  }

  getClient().action(channel, config.options.botConnectedMessage)
}

const init = () => getClient().on('join', onConnected)

module.exports = {
  onConnected,
  init
}
