import { test } from 'ava-spec'
import { get } from './config'

test('get()', t => {
  t.true(get().tmi.channels[0] === 'drathal')
})
