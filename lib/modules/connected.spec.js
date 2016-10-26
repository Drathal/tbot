import { test } from 'ava-spec'
import sinon from 'sinon'
import connection from './connection'
import { onConnected, init } from './connected'

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
  t.deepEqual(action, ['join', onConnected])
})

test.group('onConnected()', test => {
  test('with valid arguments', t => {
    action = null
    onConnected('drathal', {}, true)
    t.deepEqual(action, ['drathal', 'connectedMessage'])
  })
  test('when not self', t => {
    action = null
    onConnected('drathal', {}, false)
    t.deepEqual(action, null)
  })
  test('with unknown channel', t => {
    action = null
    onConnected('unknown', {}, true)
    t.deepEqual(action, null)
  })
})

test.after(() => getClientStub.restore())
