import dotenv from 'dotenv'
dotenv.config()
const config = {
  server: {
    port: process.env.PORT
  },
  app: {
    url: process.env.APP_URL
  },
  db: {
    uri: process.env.MONGO_URI
  },
  security: {
    token: {
      secret: process.env.TOKEN_SECRET
    }
  }
}
export default config
