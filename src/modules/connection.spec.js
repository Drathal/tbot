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

describe('connect()', it => {
  it.serial('returns error on fail', t => {
    return connection.connect(optionsFail)
      .catch(error => t.true(error.includes('Unable to connect.')))
  })

  it.serial('returns client', t => {
    return connection.connect(optionsOk)
      .then(client => {
        clientA = client
        t.true(client.ws !== undefined)
      })
  })
})

describe('client', it => {
  it.serial('is current client', t => {
    t.true(connection.client === clientA)
  })
})

describe('diconnect()', it => {
  it.serial('disconnects current client', t => {
    return connection.disconnect().then(() => {
      t.true(connection.client === null)
      mockServer.close()
    })
  })
})
