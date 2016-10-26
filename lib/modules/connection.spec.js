process.env.NODE_CONFIG_DIR = '../../config'

import { describe } from 'ava-spec'
const WebSocketServer = require('ws').Server
const connection = require('./connection')

const optionsOk = {
  options: {
    debug: false
  },
  connection: {
    server: 'localhost',
    port: 8080,
    reconnect: false
  },
  identity: {
    username: 'username',
    password: 'oauth:token'
  },
  channels: ['drathal']
}

const optionsFail = {
  ...optionsOk,
  connection: {
    server: 'localhost.fail',
    port: 1,
    reconnect: false
  }
}

const mockServer = new WebSocketServer({port: 8080})
mockServer.on('connection', function (ws) {
  ws.on('message', function (message) {
    if (message.includes('PASS')) {
      ws.send(':tmi.twitch.tv 372 drathalbot :Login successful.')
    }
  })
})

let clientA

describe('start()', it => {
  it.serial('returns error on fail', t => {
    return connection.start(optionsFail)
      .catch(error => t.true(error.includes('Unable to connect.')))
  })

  it.serial('returns client', t => {
    return connection.start(optionsOk)
      .then(client => {
        clientA = client
        t.true(client.ws !== undefined)
      })
  })
})

describe('getClient()', it => {
  it.serial('returns current client', t => {
    t.true(connection.getClient() === clientA)
  })
})

describe('stop()', it => {
  it.serial('disconnects current client', t => {
    return connection.stop().then(() => {
      t.true(connection.getClient() === null)
      mockServer.close()
    })
  })
})
