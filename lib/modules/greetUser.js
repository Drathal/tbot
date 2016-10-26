const config = require('../config').get()
const Mustache = require('mustache')
const visitors = require('./visitors')
import { getClient } from './connection'
import { channelName } from '../utils'

const onJoin = (channel, username, self) => {
  if (self) {
    return
  }

  channel = channelName(channel)

  if (visitors.has(channel, username)) {
    return
  }

  getClient().action(channel, Mustache.render(config.options.greetUser.message, {
    username
  }))
}

const init = () => getClient().on('join', onJoin)

module.exports = {
  onJoin,
  init
}
