import { connect } from 'react-redux'
import { ipcRenderer } from 'electron'
import StartComponent from '../components/start'

const messages = {
  buttton_start: 'Start Bot',
  buttton_stop: 'Stop Bot'
}

const container = connect(
  (state, props) => ({
    messages,
    chat: state.chat
  }),
  (dispatch) => ({
    onStart: () => ipcRenderer.send('start'),
    onStop: () => ipcRenderer.send('stop')
  })
)(StartComponent)

export default container
