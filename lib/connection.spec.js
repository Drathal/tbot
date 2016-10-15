import test from 'ava'
import { Server } from 'mock-socket'

let mockServer

test.before(t => {
  mockServer = new Server('ws://localhost:8080')
})

test('module/connection can connect', t => {
  require('./connection')
    .then(client => t.pass())
})

test.after(t => {
  mockServer.stop()
})
