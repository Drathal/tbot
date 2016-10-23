import test from 'ava'
import { Server } from 'mock-socket'
process.env.NODE_CONFIG_DIR = '../../config'

let mockServer

test.before(t => {
  mockServer = new Server('ws://localhost:8080')
})

test('client on connect', t => {
  return require('./connection').then(client => t.pass())
})

test.before(t => {
  mockServer = new Server('ws://localhost:8585')
})

test('fail on error', t => {
  return require('./connection').catch(error => t.pass(error))
})

test.afterEach(t => {
  mockServer.stop()
})
