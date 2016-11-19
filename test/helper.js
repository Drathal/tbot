process.env.NODE_ENV = 'test'
require('../src/config')

const PrettyError = require('pretty-error')
const pe = PrettyError.start()
pe.skipNodeFiles()
pe.skipPath('bootstrap_node.js')
pe.skipPath('internal/process/next_tick.js')
