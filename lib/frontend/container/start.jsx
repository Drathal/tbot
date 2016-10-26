import { connect } from 'react-redux'
import Start from '../components/start'
const {ipcRenderer} = require('electron')

const container = connect(
  (state, props) => ({}),
  (dispatch) => ({})
)(Start)

export default container
