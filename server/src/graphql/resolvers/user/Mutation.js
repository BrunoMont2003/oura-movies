import User from '../../../models/User'
import jwt from 'jwt-simple'
import config from '../../../configs/general.config'
import bcrypt from 'bcrypt'
import { GraphQLYogaError } from '@graphql-yoga/node'
const userMutations = {
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
  async signup (_, { name, email, password }) {
    const user = await User.findOne({ email })
    if (user) {
      throw new GraphQLYogaError('Email in use')
    }
    const encriptedPass = bcrypt.hashSync(password, 10)
    const newUser = new User({
      email,
      name,
      password: encriptedPass
    })
    try {
      newUser.save()
    } catch (error) {
      throw new GraphQLYogaError('Error creating user')
    }
    const payload = {
      id: newUser.id,
      email: newUser.email
    }
    return {
      token: jwt.encode(payload, config.security.token.secret)
    }
  },
  async deleteUser (_, { id }) {
    const user = await User.findById(id)
    if (!user) {
      throw new GraphQLYogaError('User not found')
    }
    await User.findByIdAndDelete(id)
    return user
  }
}

export default userMutations
