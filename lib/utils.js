import { config } from './config'

const defaultChannel = config.tmi.channels[0]

const isKnownChannel = (channel) => !!config.tmi.channels.filter(c => c === stripHash(channel)).length

const stripHash = (string) => string[0] === '#' ? string.substring(1) : string

const channelName = (channel) => isKnownChannel(channel) ? stripHash(channel) : stripHash(defaultChannel)

module.exports = {
  channelName,
  defaultChannel,
  isKnownChannel,
  stripHash
}
