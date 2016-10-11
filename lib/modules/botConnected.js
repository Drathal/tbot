const client = require('../client')
const config = require('config')

module.exports = client.on('connected', function(address, port) {
  config.tmi.channels.map(channel => client.action(channel, "Hallo"))
});
