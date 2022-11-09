import connect from './configs/db.config'
import server from './server'
import config from './configs/general.config'

connect()
server.start(
  {
    port: config.server.port
  },
  ({ port }) => console.log(`Server is running on http://localhost:${port}`)
)
