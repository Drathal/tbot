import _ from 'lodash'
import tmi from 'tmi.js'
import { config } from '../config'

let client

const connect = (options = {}) => {
  client = new tmi.client(_.defaultsDeep(options, config.tmi)) // eslint-disable-line new-cap
  return client.connect().then(() => client)
}

const disconnect = () => {
  return client.disconnect().then(() => {
    client = null
  })
}

module.exports = {
  connect,
  disconnect,
  get client () {
    return client
  },
  set client (newClient) {
    client = newClient
  }
}
