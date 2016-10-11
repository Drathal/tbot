const client = require('../client')
const config = require('config')

const message = "Hallo, ich bin der Hausmeister!"

module.exports.run = () => client.on('connected', function(address, port) {
  config.tmi.channels.map(channel => client.action(channel, message))
});
