import { test } from 'ava-spec'
import { stub, assert } from 'sinon'
import connection from './connection'
import { onMessage, init } from './commands'

const stubClient = (getterName) => {
  let sStub = stub()
  let cStub = stub(connection, 'client', { get () { return { [getterName]: sStub } } })
  return [sStub, cStub]
}

test('init()', t => {
  let [on, connectionStub] = stubClient('on')
  init()
  assert.calledOnce(on)
  assert.calledWith(on, 'message', onMessage)
  connectionStub.restore()
})

test('onMessage() with valid arguments', t => {
  let [action, connectionStub] = stubClient('action')
  onMessage('drathal', {}, '!test', true)
  assert.calledOnce(action)
  assert.calledWith(action, 'drathal', 'testcommand')
  connectionStub.restore()
})

test('onMessage() with invalid command', t => {
  let [action, connectionStub] = stubClient('action')
  onMessage('drathal', {}, '!invalid', true)
  assert.callCount(action, 0)
  connectionStub.restore()
})

test('onMessage() with command prefix', t => {
  let [action, connectionStub] = stubClient('action')
  onMessage('drathal', {}, '#test', true)
  assert.callCount(action, 0)
  connectionStub.restore()
})

test('onMessage() with invalid channel uses default channel', t => {
  let [action, connectionStub] = stubClient('action')
  onMessage('invalid_channel', {}, '!test', true)
  assert.calledOnce(action)
  assert.calledWith(action, 'drathal', 'testcommand')
  connectionStub.restore()
})
