import { GraphQLYogaError } from '@graphql-yoga/node'
import User from '../../../models/User'
const userQueries = {
  getUsers: async () => {
    const users = await User.find()
      .select('-password')
      .populate('favorites_movies')
    return users
  },
  getUser: async (_, { id }) => {
    const user = await User.findById(id)
      .select('-password')
      .populate('favorites_movies')
    if (user) {
      return user
    } else {
      throw new GraphQLYogaError('User not found')
    }
  },
  me: async (_, __, { currentUser }) => {
    if (currentUser) return currentUser
    return new GraphQLYogaError('Not authenticated')
  }
}

export default userQueries
