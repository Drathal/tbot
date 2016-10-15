const config = require('config')
const Mustache = require('mustache')
const connection = require('../connection')
const visitors = require('./visitors')

const onJoin = module.exports.onJoin = (channel, username, self, client) => {
  if (visitors.has(username, channel)) {
    return
  }

  client.action(channel, Mustache.render(config.options.greetUser.message, {
    username
  }))
}

connection.then(client => client.on('join', (channel, username, self) => onJoin(channel, username, self, client)))
