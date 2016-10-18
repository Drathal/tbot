import React from 'react'
const {ipcRenderer} = require('electron')

const component = () => (<div className={`main`}>
  <h1>tbot</h1>
  <button onClick={ () => ipcRenderer.send('start')} >START</button>
</div>)

component.propTypes = {}

component.defaultProps = {}

export default component
