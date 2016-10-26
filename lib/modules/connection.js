const _ = require('lodash')
const tmi = require('tmi.js')
const config = require('config')

let client

module.exports.start = (options = {}) => {
  client = new tmi.client(_.defaultsDeep(options, config.tmi)) // eslint-disable-line new-cap
  return client.connect().then(() => client)
}

module.exports.getClient = () => client

module.exports.stop = () => {
  return client.disconnect().then(() => {
    client = null
  })
}
