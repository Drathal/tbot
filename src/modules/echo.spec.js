import rewire from 'rewire'
import { test } from 'ava-spec'
import { stub, assert } from 'sinon'

import connection from './connection'
import { BrowserWindow } from '../../test/electronMock'
const echo = rewire('./echo')
const { init, onAction } = echo

const makeStub = (obj, prop, getterName) => {
  let myStub = stub()
  stub(obj, prop, { get () { return { [getterName]: myStub } } })
  return myStub
}

test('init()', t => {
  makeStub(connection, 'client', 'on')
  init()
  t.true(connection.client.on.calledOnce)
  t.true(connection.client.on.calledWith('action', echo.onAction))
})

test('onAction() with valid arguments', t => {
  echo.__set__('BrowserWindow', BrowserWindow)
  onAction('drathal', {}, 'action', true)
  assert.calledOnce(BrowserWindow.fromId().send)
  assert.calledWith(BrowserWindow.fromId().send, 'chat', {
    channel: 'drathal',
    from: 'username',
    message: 'message',
    time: '1:1:1' }
  )
})
