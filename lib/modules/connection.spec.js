import test from 'ava'
import { Server } from 'mock-socket'

let mockServer

test.before(t => {
  mockServer = new Server('ws://localhost:8080')
})

test('connection => client on connect', t => {
  require('./connection')
    .then(client => t.pass())
})

test.before(t => {
  mockServer = new Server('ws://localhost:8585')
})

test('connection => fail on error', t => {
  require('./connection')
    .catch(error => t.pass(error))
})

test.afterEach(t => {
  mockServer.stop()
})
