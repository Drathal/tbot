const { app, BrowserWindow, ipcMain } = require('electron')
const config = require('./config').get()
const connection = require('./modules/connection')
const connected = require('./modules/connected')
const visitors = require('./modules/visitors')
const greetUser = require('./modules/greetUser')
const commands = require('./modules/commands')

let window
app.on('ready', () => {
  window = new BrowserWindow(config.window)
  window.loadURL(`file://${__dirname}/frontend/index.html`)
  window.openDevTools()
})

ipcMain.on('start', () => {
  connection.connect().then(() => {
    connected.init()
    visitors.init()
    commands.init()
    greetUser.init()
  })
})

ipcMain.on('stop', () => {
  connection.disconnect()
})
