const client = require('../client')
const visitors = require('./visitors')

const commands = {
  "!test" : () => "Yeah, this is just a test.",
  "!visitors" :  () => `visitors: ${visitors.count()}`
}

module.exports.run = () => client.on('message', function (channel, userstate, message, self) {
  if (message[0] !== '!' || !commands[message])
    return

  client.action(channel, commands[message]())
})
