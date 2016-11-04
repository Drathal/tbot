import { ADD_CHAT_MESSAGE } from './actions'

const initialState = {
  channel: '@channel',
  from: '@from',
  message: '@message',
  time: '@time'
}

const chat = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT_MESSAGE:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}

export default chat
