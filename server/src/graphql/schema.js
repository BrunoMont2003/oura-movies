import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { createSchema } from 'graphql-yoga'
import resolvers from './resolvers'

export const schema = createSchema({
  typeDefs: loadSchemaSync('./src/**/*.graphql', {
    loaders: [new GraphQLFileLoader()]
  }),
  resolvers
})
