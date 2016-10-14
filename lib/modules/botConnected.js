const client = require('../client')
const config = require('config')

const onConnected = module.exports.onMessage = (address, port) => {
  config.tmi.channels.map(channel => client.action(channel, config.options.botConnectedMessage))
}

client.on('connected', onConnected)
