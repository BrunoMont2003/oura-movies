import User from '../../models/User'
const Query = {
  getUsers: async () => {
    try {
      const users = await User.find()
      return users
    } catch (err) {
      throw new Error(err)
    }
  },
  getUser: async (_, { userId }) => {
    try {
      const user = await User.findById(userId)
      if (user) {
        return user
      } else {
        throw new Error('User not found')
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default Query
