const connection = require('../connection')
const config = require('config')

const onConnected = module.exports.onConnected = (client) => {
  config.tmi.channels.map(channel => client.action(channel, config.options.botConnectedMessage))
}

connection.then(client => onConnected(client))
