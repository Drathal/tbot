const config = require('./config').get()

const defaultChannel = config.tmi.channels[0]

const isKnownChannel = (channel) => !!config.tmi.channels.filter(c => c === channel).length

const stripHash = (string) => string[0] === '#' ? string.substring(1) : string

const channelName = (channel) => isKnownChannel(stripHash(channel)) ? stripHash(channel) : defaultChannel

module.exports = {
  channelName,
  defaultChannel,
  isKnownChannel,
  stripHash
}
