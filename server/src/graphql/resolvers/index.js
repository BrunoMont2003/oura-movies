import UserResolver from './user'
import MovieCatalogResolver from './moviecatalog'
const resolvers = {
  Query: {
    ...UserResolver.Query,
    ...MovieCatalogResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...MovieCatalogResolver.Mutation
  }
}

export default resolvers
