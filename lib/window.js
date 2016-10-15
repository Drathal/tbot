const remote = require('electron').remote
const main = remote.require('./index.js')

let b = document.createElement('button')
b.textContent = 'start'
b.addEventListener('click', () => { main.start() }, false)
document.body.appendChild(b)
