import React, { PropTypes } from 'react'
const {ipcRenderer} = require('electron')

const component = ({ messages }) => (<div className={`main`}>
  <h1>tbot</h1>
  <button onClick={ () => ipcRenderer.send('start') } >{ messages.buttton_start }</button>
  <button onClick={ () => ipcRenderer.send('stop') } >{ messages.buttton_stop }</button>
</div>)

component.propTypes = {
  messages: PropTypes.shape({
    buttton_start: React.PropTypes.string,
    buttton_stop: React.PropTypes.string
  }).isRequired
}

component.defaultProps = {
  messages: {
    buttton_start: '#start#',
    buttton_stop: '#stop#'
  }
}

component.isplayName = 'main'

export default component
