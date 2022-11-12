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
  },
  external: {
    api: {
      tmdb: {
        url: process.env.TMDB_API_URL,
        key: process.env.TMDB_API_KEY,
        image_url: process.env.TMDB_IMAGE_URL
      }
    }
  }
}
export default config
