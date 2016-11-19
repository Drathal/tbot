import { app, BrowserWindow, ipcMain } from 'electron'
import onStart from './events/start'
import onStop from './events/stop'
import { config } from './config'

app.on('ready', () => {
  const window = new BrowserWindow(config.window)
  window.loadURL(`file://${__dirname}/frontend/index.html`)
  window.openDevTools()
})

ipcMain.on('start', onStart)
ipcMain.on('stop', onStop)
