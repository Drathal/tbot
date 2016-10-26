import { getClient } from './connection'
const config = require('config')

const onConnected = module.exports.onConnected = (channel, username, self) => {
  if (!self) {
    return
  }

  getClient().action(channel, config.options.botConnectedMessage)
}

module.exports.init = () => getClient().on('join', onConnected)
