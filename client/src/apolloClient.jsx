import config from './configs/general.configs'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: config.server.api.url,
  cache: new InMemoryCache()
})

export default client
