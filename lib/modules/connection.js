const _ = require('lodash')
const tmi = require('tmi.js')
const config = require('../config').get()

function Connection () {
  this.client = null
}

Connection.prototype.connect = function (options = {}) {
  this.client = new tmi.client(_.defaultsDeep(options, config.tmi)) // eslint-disable-line new-cap
  return this.client.connect().then(() => this.client)
}

Connection.prototype.disconnect = function (options = {}) {
  return this.client.disconnect().then(() => {
    this.client = null
  })
}

module.exports = exports = new Connection()
