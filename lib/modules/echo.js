const Mustache = require('mustache')
const connection = require('../connection')

const onMessage = module.exports.onMessage = (channel, userstate, message, self, client) => {

}

connection.then(client => client.on('message', (...args) => onMessage(...[...args, client])))
