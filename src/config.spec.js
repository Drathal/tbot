import { test } from 'ava-spec'
import { config } from './config'

test('config', t => {
  t.true(config.tmi.channels[0] === 'drathal')
})
