import connection from '../modules/connection'

import connected from '../modules/connected'
import visitors from '../modules/visitors'
import greetUser from '../modules/greetUser'
import commands from '../modules/commands'
import echo from '../modules/echo'

export default () => {
  connection.connect().then(() => {
    connected.init()
    visitors.init()
    commands.init()
    greetUser.init()
    echo.init()
  })
}
