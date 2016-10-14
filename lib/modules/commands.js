const Mustache = require('mustache')
const config = require('config')
const client = require('../client')
const visitors = require('./visitors')

const commandPrefix = config.options.prefix

const commands = config.options.commands

const onMessage = module.exports.onMessage = (channel, userstate, message, self) => {
  const command = message.substring(1)
  if (message[0] !== commandPrefix || !commands[command]) {
    return
  }

  client.action(channel, Mustache.render(
    commands[command],
    {
      visitorCount: visitors.count()
    }
  ))
}

client.on('message', onMessage)
