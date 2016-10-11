const tmi = require('tmi.js')
const config = require('config')
const client = new tmi.client(config.tmi)
client.connect()

module.exports = client
