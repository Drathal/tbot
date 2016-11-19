import { render } from 'mustache'
import { config } from '../config'
import { client } from './connection'
import { count } from './visitors'
import { channelName } from '../utils'

const commands = config.options.commands

const onMessage = (channel, userstate, message, self) => {
  if (!message) {
    return
  }

  channel = channelName(channel)
  const command = message.substring(1)

  if (message[0] !== config.options.prefix || !commands[command]) {
    return
  }

  const string = render(commands[command], {
    visitorCount: count(),
    channel: channel,
    command: command
  })

  client.action(channel, string)
}

const init = () => client.on('message', onMessage)

module.exports = {
  onMessage,
  init
}
