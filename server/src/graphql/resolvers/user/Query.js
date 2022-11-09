import { GraphQLYogaError } from '@graphql-yoga/node'
import User from '../../../models/User'
const userQueries = {
  getUsers: async () => {
    const users = await User.find().select('-password')
    return users
  },
  getUser: async (_, { id }) => {
    const user = await User.findById(id).select('-password')
    if (user) {
      return user
    } else {
      throw new GraphQLYogaError('User not found')
    }
  }
}

export default userQueries
