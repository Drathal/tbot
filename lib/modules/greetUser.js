const client = require('../client')
const visitors = require('./visitors')

module.exports.run = () => client.on('join', function (channel, username, self) {      
  if (visitors.has(username))
    return

  client.action(channel, `${username}, welcome to the stream!`)
})
