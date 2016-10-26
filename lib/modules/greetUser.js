const config = require('config')
const Mustache = require('mustache')
import { getClient } from './connection'
const visitors = require('./visitors')

const onJoin = module.exports.onJoin = (channel, username, self) => {
  if (visitors.has(username, channel)) {
    return
  }

  getClient().action(channel, Mustache.render(config.options.greetUser.message, {
    username
  }))
}

module.exports.init = () => getClient().on('join', onJoin)
