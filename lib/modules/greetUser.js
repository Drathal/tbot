const Mustache = require('mustache')
const client = require('../client')
const visitors = require('./visitors')

const onJoin = module.exports.onJoin = (channel, username, self) => {
  if (visitors.has(username)) {
    return
  }

  client.action(channel, Mustache.render(config.options.greetUser.message, {
    username
  }))
}

client.on('join', onJoin)
