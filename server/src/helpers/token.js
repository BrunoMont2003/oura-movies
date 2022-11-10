import jwt from 'jwt-simple'
import User from '../models/User'
import config from '../configs/general.config'

export const decodeTokenAndGetUser = async (token) => {
  try {
    const payload = jwt.decode(token, config.security.token.secret)
    const user = await User.findById(payload.id).select('-password -__v')
    return user
  } catch (error) {
    console.log('Error decoding token: ', error.message)
    return null
  }
}
