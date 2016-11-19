import { client } from './connection'
import { isKnownChannel } from '../utils'
import { config } from '../config'

const onConnected = (channel, username, self) => {
  if (!self || !isKnownChannel(channel)) {
    return
  }

  client.action(channel, config.options.botConnectedMessage)
}

const init = () => client.on('join', onConnected)

module.exports = {
  onConnected,
  init
}
