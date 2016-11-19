import { config } from '../config'
import { channelName, defaultChannel } from '../utils'
import { client } from './connection'

let visitors = {}

config.tmi.channels.map(channel => (visitors[channel] = []))

const onJoin = (channel, username, self) => {
  if (self) {
    return
  }

  add(username, channel)
}

const has = (newVisitor, channel = defaultChannel) => {
  return !!visitors[channel].filter(visitor => visitor === newVisitor).length
}

const get = (channel = defaultChannel) => visitors[channel]

const count = (channel = defaultChannel) => visitors[channel].length

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

const init = () => client.on('join', onJoin)

module.exports = {
  onJoin,
  has,
  get,
  count,
  add,
  init
}
