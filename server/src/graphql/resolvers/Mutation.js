import User from '../../models/User'
import jwt from 'jwt-simple'
import config from '../../configs/general.config'
import bcrypt from 'bcrypt'
import { GraphQLYogaError } from '@graphql-yoga/node'
const Mutation = {
  async login (_, { email, password }) {
    const user = await User.findOne({ email })
    if (!user) {
      throw new GraphQLYogaError('Invalid credentials')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw new GraphQLYogaError('Invalid credentials')
    }
    const payload = {
      id: user.id,
      email: user.email
    }
    return {
      token: jwt.encode(payload, config.security.token.secret)
    }
  },
  signup: async (_, { email, password }) => {
    try {
      const user = await User.findOne({ email })
      if (user) {
        throw new GraphQLYogaError('Email in use')
      }
      const encriptedPass = bcrypt.hashSync(
        password,
        config.security.token.secret
      )
      const newUser = await new User({
        email,
        password: encriptedPass
      }).save()
      const payload = {
        id: newUser.id,
        email: newUser.email
      }
      return {
        token: jwt.encode(payload, config.security.token.secret)
      }
    } catch (err) {
      throw new GraphQLYogaError(err)
    }
  }
}

export default Mutation
