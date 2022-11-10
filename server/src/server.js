import { createServer } from '@graphql-yoga/node'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import resolvers from './graphql/resolvers/'
import { decodeTokenAndGetUser } from './helpers/token'
const server = createServer({
  schema: {
    typeDefs: loadFilesSync(
      path.join(__dirname, './graphql/typeDefs/*.graphql')
    ),
    resolvers
  },
  context: async ({ request }) => {
    const token = request ? request.headers.get('authorization') : null
    if (token) {
      try {
        const user = await decodeTokenAndGetUser(token)
        return { currentUser: user }
      } catch (e) {
        console.log(e.message)
        return { user: null }
      }
    }
  },

  maskedErrors: {
    handleParseErrors: true,
    handleValidationErrors: true
  }
})

export default server
