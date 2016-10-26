const Mustache = require('mustache')
const config = require('../config').get()
import { getClient } from './connection'
const visitors = require('./visitors')
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

  const string = Mustache.render(commands[command], {
    visitorCount: visitors.count(),
    channel: channel,
    command: command
  })

  getClient().action(channel, string)
}

const init = () => getClient().on('message', onMessage)

module.exports = {
  onMessage,
  init
}
