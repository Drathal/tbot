export const ADD_CHAT_MESSAGE = 'chat/ADD_CHAT_MESSAGE'

export const addChatMessage = (channel, from, message, time) => ({
  type: ADD_CHAT_MESSAGE,
  payload: {
    channel,
    from,
    message,
    time
  }
})
