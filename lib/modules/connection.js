const _ = require('lodash')
const tmi = require('tmi.js')
const config = require('../config').get()

let client

const start = (options = {}) => {
  client = new tmi.client(_.defaultsDeep(options, config.tmi)) // eslint-disable-line new-cap
  return client.connect().then(() => client)
}

const getClient = () => client

const stop = () => {
  return client.disconnect().then(() => {
    client = null
  })
}

module.exports = {
  start,
  getClient,
  stop
}
