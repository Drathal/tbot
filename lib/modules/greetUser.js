const client = require('../client')

module.exports = client.on('join', function (channel, username, self) {
  client.action(channel, user['display-name'] + ", welcome to the stream!")
});
