import connect from './configs/db.config'
import server from './server'
import config from './configs/general.config'
import seed from './seed'

connect()
seed()
server.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`)
})
