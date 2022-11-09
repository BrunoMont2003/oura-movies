import { createServer } from '@graphql-yoga/node'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import resolvers from './graphql/resolvers'
const server = createServer({
  schema: {
    typeDefs: loadFilesSync(path.join(__dirname, './graphql/schema.graphql')),
    resolvers
  }
})

export default server
