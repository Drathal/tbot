import { test } from 'ava-spec'
import { stripHash, channelName, defaultChannel } from './utils'

test('defaultChannel()', t => {
  t.true(defaultChannel === 'drathal')
})

test('stripHash()', t => {
  t.true(stripHash('nohash') === 'nohash')
  t.true(stripHash('#hash') === 'hash')
})

test('channelName()', t => {
  t.true(channelName('#drathal') === 'drathal')
  t.true(channelName('drathal') === 'drathal')
  t.true(channelName('') === 'drathal')
})
