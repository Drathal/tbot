const config = require('config')
const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let window = new BrowserWindow(config.window)
  window.loadURL(`file://${__dirname}/index.html`)
})

exports.start = () => {
  require('./modules/botConnected')
  require('./modules/visitors')
  require('./modules/greetUser')
  require('./modules/commands')
}
