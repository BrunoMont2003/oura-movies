import { decodeTokenAndGetUser } from './helpers/token'
import { schema } from './graphql/schema'
import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import plugins from './graphql/plugins'

const yoga = createYoga({
  schema,
  plugins,
  context: async ({ request }) => {
    const token = request ? request.headers.get('authorization') : null
    if (token) {
      const user = await decodeTokenAndGetUser(token)
      return { currentUser: user }
    }
  }
})
const server = createServer(yoga)

export default server
