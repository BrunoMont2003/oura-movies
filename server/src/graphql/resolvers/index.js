import UserResolver from './user'

const resolvers = {
  Query: {
    ...UserResolver.Query
  },
  Mutation: {
    ...UserResolver.Mutation
  }
}

export default resolvers
