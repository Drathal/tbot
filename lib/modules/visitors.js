const client = require('../client')

let visitors = []

const hasVisitor = (v) => !!visitors.filter(visitor => visitor === v).length

const addVisitor = (v) => {

  if (hasVisitor(v))
    return

  visitors.push(v)

  console.log(visitors)
}

module.exports = {
  run : () => client.on('join', function (channel, username, self) {
    addVisitor(username)
  }),
  has: (v) => hasVisitor(v),
  get: () => visitors,
  count: () => visitors.length,
  add: (v) => addVisitor(v)
}
