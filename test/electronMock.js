import { stub } from 'sinon'

const stub1 = stub()

module.exports = {
  BrowserWindow: {
    fromId: () => ({
      send: stub1
    })
  }
}
