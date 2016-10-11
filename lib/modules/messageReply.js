const client = require('../client')

const commands = {
  "!test" : "Yeah, this is just a test."
}

module.exports = client.on('message', function (channel, userstate, message, self) {

  if (message[0] !== '!' && !commands[message])
    return

  client.action(channel, commands[message])
});
