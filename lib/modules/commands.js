const Mustache = require('mustache')
const config = require('config')
const connection = require('./connection')
const visitors = require('./visitors')

const commandPrefix = config.options.prefix

const commands = config.options.commands

const onMessage = module.exports.onMessage = (channel, userstate, message, self, client) => {
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

connection.then(client => client.on('message', (...args) => onMessage(...[...args, client])))
