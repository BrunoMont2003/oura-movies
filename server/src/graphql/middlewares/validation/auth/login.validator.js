import { GraphQLError } from 'graphql'
import { formatErrorMessage } from '../../../../helpers/error'
import { LoginSchema } from '../../schemas'

const LoginValidator = async (resolve, root, args, context, info) => {
  try {
    await LoginSchema.validateAsync(args)
  } catch (err) {
    throw new GraphQLError(formatErrorMessage(err.message))
  }

  return resolve(root, args, context, info)
}

export default LoginValidator
