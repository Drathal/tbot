const Mustache = require('mustache')
const config = require('config')
import { getClient } from './connection'
const visitors = require('./visitors')

const commandPrefix = config.options.prefix
const commands = config.options.commands

const onMessage = module.exports.onMessage = (channel, userstate, message, self) => {
  const command = message.substring(1)
  if (message[0] !== commandPrefix || !commands[command]) {
    return
  }

  getClient().action(channel, Mustache.render(
    commands[command],
    {
      visitorCount: visitors.count()
    }
  ))
}

module.exports.init = () => getClient().on('message', onMessage)
