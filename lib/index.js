const config = require('config')
const {app, BrowserWindow, ipcMain} = require('electron')

let window
app.on('ready', () => {
  window = new BrowserWindow(config.window)
  window.loadURL(`file://${__dirname}/frontend/index.html`)
  window.openDevTools()
})

ipcMain.on('start', () => {
  require('./modules/connection').start().then((client) => {
    require('./modules/connected').init()
    require('./modules/visitors').init()
    require('./modules/greetUser').init()
    require('./modules/commands').init()
  })
})

ipcMain.on('stop', () => {
  require('./modules/connection').stop()
})
