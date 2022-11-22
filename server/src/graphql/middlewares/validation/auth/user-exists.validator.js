import { GraphQLError } from 'graphql'
import User from '../../../../models/User'
const UserExists = async (resolve, root, args, context, info) => {
  const { email } = args
  const user = await User.findOne({ email })
  if (user) {
    console.log('User already exists')
    throw new GraphQLError('User already exists')
  }
  return resolve(root, args, context, info)
}

export default UserExists
