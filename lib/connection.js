const tmi = require('tmi.js')
const config = require('config')
const client = new tmi.client(config.tmi) // eslint-disable-line new-cap

module.exports = new Promise(function (resolve, reject) {
  client.connect()
    .then(() => resolve(client))
    .catch((e) => reject(e))
})
