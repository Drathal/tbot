import React, { PropTypes } from 'react'

const component = ({ messages, chat, onStart, onStop }) => (<div className={`main`}>
  <h1>tbot</h1>
  <button onClick={ () => onStart() } >{ messages.buttton_start }</button>
  <button onClick={ () => onStop() } >{ messages.buttton_stop }</button>
  <div>{ chat.channel } { chat.time } { chat.from } { chat.message }</div>
</div>)

component.propTypes = {
  messages: PropTypes.shape({
    buttton_start: React.PropTypes.string,
    buttton_stop: React.PropTypes.string
  }).isRequired,
  chat: PropTypes.object,
  onStart: PropTypes.func,
  onStop: PropTypes.func
}

component.defaultProps = {
  messages: {
    buttton_start: '#start#',
    buttton_stop: '#stop#'
  },
  onStart: () => {},
  onStop: () => {}
}

component.isplayName = 'start'

export default component
