import { GraphQLError } from 'graphql'
import { formatErrorMessage } from '../../../../helpers/error'
import { SignupSchema } from '../../schemas'

const SignupValidator = async (resolve, root, args, context, info) => {
  try {
    await SignupSchema.validateAsync(args)
  } catch (err) {
    throw new GraphQLError(formatErrorMessage(err.message))
  }

  return resolve(root, args, context, info)
}

export default SignupValidator
