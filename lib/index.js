const config = require('config')
const {app, BrowserWindow, ipcMain} = require('electron')

let window
app.on('ready', () => {
  window = new BrowserWindow(config.window)
  window.loadURL(`file://${__dirname}/frontend/index.html`)
  window.openDevTools()
})

ipcMain.on('start', () => {
  require('./modules/connected')
  require('./modules/visitors')
  require('./modules/greetUser')
  require('./modules/commands')
})
