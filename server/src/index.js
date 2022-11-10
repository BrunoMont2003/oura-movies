import connect from './configs/db.config'
import server from './server'
import config from './configs/general.config'
import seed from './seed'

connect()
seed()
server.start(
  {
    port: config.server.port
  },
  ({ port }) => console.log(`Server is running on http://localhost:${port}`)
)
