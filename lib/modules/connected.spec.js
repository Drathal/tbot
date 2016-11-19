import { test } from 'ava-spec'
import { stub, assert } from 'sinon'

import connection from './connection'
import { init, onConnected } from './connected'

const config = require('../config').config
const stubClient = (getterName) => {
  let sStub = stub()
  let cStub = stub(connection, 'client', { get () { return { [getterName]: sStub } } })
  return [sStub, cStub]
}

test('init()', t => {
  let [on, connectionStub] = stubClient('on')
  init()
  assert.calledOnce(on)
  assert.calledWith(on, 'join', onConnected)
  connectionStub.restore()
})

test('onConnected() with valid arguments', t => {
  let [action, connectionStub] = stubClient('action')
  onConnected('drathal', {}, true)
  assert.calledOnce(action)
  assert.calledWith(action, 'drathal', config.options.botConnectedMessage)
  connectionStub.restore()
})

test('onConnected() when not self', t => {
  let [action, connectionStub] = stubClient('action')
  onConnected('drathal', {}, false)
  assert.callCount(action, 0)
  connectionStub.restore()
})

test('onConnected() with unknown channel', t => {
  let [action, connectionStub] = stubClient('action')
  onConnected('unknown', {}, true)
  assert.callCount(action, 0)
  connectionStub.restore()
})
