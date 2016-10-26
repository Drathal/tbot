const config = require('../config').get()
import { channelName, defaultChannel } from '../utils'
import { getClient } from './connection'

let visitors = {}

/* init channel visitors */
config.tmi.channels.map(channel => (visitors[channel] = []))

/* add visitor on channel join */
const onJoin = (channel, username, self) => {
  if (self) {
    return
  }

  add(username, channel)
}

/* check if channel has visitor */
const has = (newVisitor, channel = defaultChannel) => {
  return !!visitors[channel].filter(visitor => visitor === newVisitor).length
}

/* get visitors for a channel */
const get = (channel = defaultChannel) => visitors[channel]

/* get visitor count for a channel */
const count = (channel = defaultChannel) => visitors[channel].length

/* add a visitor to a channel */
const add = (visitor, channel = defaultChannel) => {
  channel = channelName(channel)

  if (has(visitor, channel)) {
    return
  }

  if (!visitors[channel]) {
    visitors[channel] = []
  }

  visitors[channel] = [
    ...visitors[channel],
    visitor
  ]
}

const init = () => getClient().on('join', onJoin)

module.exports = {
  onJoin,
  has,
  get,
  count,
  add,
  init
}
