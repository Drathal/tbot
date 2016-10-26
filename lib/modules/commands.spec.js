import { test } from 'ava-spec'
import sinon from 'sinon'
import connection from './connection'
import { onMessage, init } from './commands'

let action
let getClientStub

test.before(() => {
  getClientStub = sinon.stub(connection, 'getClient', () => ({
    action: (...args) => (action = args),
    on: (...args) => (action = args)
  }))
})

test('init()', t => {
  action = null
  init()
  t.deepEqual(action, ['message', onMessage])
})

test.group('onMessage()', test => {
  test('with valid arguments', t => {
    action = null
    onMessage('drathal', {}, '!test', false)
    t.deepEqual(action, ['drathal', 'testcommand'])
  })

  test('with invalid command', t => {
    action = null
    onMessage('drathal', {}, '!invalid', false)
    t.deepEqual(action, null)
  })

  test('with invalid command prefix', t => {
    action = null
    onMessage('drathal', {}, '#test', false)
    t.deepEqual(action, null)
  })

  test('with invalid channel uses default channel', t => {
    action = null
    onMessage('invalid_channel', {}, '!test', false)
    t.deepEqual(action, ['drathal', 'testcommand'])
  })
})

test.after(() => getClientStub.restore())
