import { GraphQLError } from 'graphql'
import User from '../../../models/User'
import jwt from 'jwt-simple'
import config from '../../../configs/general.config'
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
      throw new GraphQLError('User not found')
    }
  },
  me: async (_, { token }) => {
    try {
      const { id } = jwt.decode(token, config.security.token.secret)
      const user = await User.findById(id)
      return user
    } catch (err) {
      throw new GraphQLError('Invalid token')
    }
  }
}

export default userQueries
