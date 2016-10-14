const tmi = require('tmi.js')
const config = require('config')
const client = new tmi.client(config.tmi) // eslint-disable-line new-cap
client.connect()

module.exports = client
