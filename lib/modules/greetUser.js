const client = require('../client')

let visitors = []

module.exports = client.on('join', function (channel, username, self) {

  console.info(`${username}, joins the room!`, visitors.length, visitors)

  if (visitors.filter(visitor => visitor === username))
    return

  visitors.push(username)

  client.action(channel, `${username}, welcome to the stream!`)
});
