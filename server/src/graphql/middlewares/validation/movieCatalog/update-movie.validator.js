import { GraphQLError } from 'graphql'
import { formatErrorMessage } from '../../../../helpers/error'
import { UpdateMovieSchema } from '../../schemas'

const UpdateMovieValidator = async (resolve, root, args, context, info) => {
  try {
    await UpdateMovieSchema.validateAsync(args)
  } catch (error) {
    throw new GraphQLError(formatErrorMessage(error.message))
  }
  return resolve(root, args, context, info)
}

export default UpdateMovieValidator
