import { createServer } from '@graphql-yoga/node'
import resolvers from './graphql/resolvers/'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { decodeTokenAndGetUser } from './helpers/token'
const server = createServer({
  schema: {
    typeDefs: loadSchemaSync('./src/**/*.graphql', {
      loaders: [new GraphQLFileLoader()]
    }),
    resolvers
  },
  context: async ({ request }) => {
    const token = request ? request.headers.get('authorization') : null
    if (token) {
      const user = await decodeTokenAndGetUser(token)
      return { currentUser: user }
    }
  },

  maskedErrors: {
    handleParseErrors: true,
    handleValidationErrors: true
  }
})

export default server
