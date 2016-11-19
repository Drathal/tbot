import { config } from '../config'
import { render } from 'mustache'
import { has, count } from './visitors'
import { client } from './connection'
import { channelName } from '../utils'

const onJoin = (channel, username, self) => {
  if (self) {
    return
  }

  channel = channelName(channel)

  if (has(channel, username)) {
    return
  }

  client.action(channel, render(config.options.greetUser.message, {
    visitorCount: count(),
    channel: channel,
    username
  }))
}

const init = () => client.on('join', onJoin)

module.exports = {
  onJoin,
  init
}
