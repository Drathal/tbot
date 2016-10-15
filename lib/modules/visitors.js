const config = require('config')
const connection = require('../connection')

let visitors = {}

/* set default channel to the first channel from, the config */
const defaultChannel = config.tmi.channels[0]

/* init channel visitors */
config.tmi.channels.map(channel => (visitors[channel] = []))

/* add visitor on channel join */
const onJoin = (channel, username, self) => {
  if (username === self) {
    return
  }

  add(username, channel)
}

/* check if channel has visitor */
const has = (newVisitor, channel = defaultChannel) => !!visitors[channel].filter(visitor => visitor === newVisitor).length

/* get visitors for a channel */
const get = (channel = defaultChannel) => visitors[channel]

/* get visitor count for a channel */
const count = (channel = defaultChannel) => visitors[channel].length

/* add a visitor to a channel */
const add = (visitor, channel = defaultChannel) => {
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

connection.then(client => client.on('join', (channel, username, self) => onJoin(channel, username, self, client)))

module.exports = {
  onJoin,
  has,
  get,
  count,
  add
}
