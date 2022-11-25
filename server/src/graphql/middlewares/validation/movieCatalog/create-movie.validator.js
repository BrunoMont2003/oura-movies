import { GraphQLError } from 'graphql'
import { formatErrorMessage } from '../../../../helpers/error'
import { CreateMovieSchema } from '../../schemas'

const CreateMovieValidator = async (resolve, root, args, context, info) => {
  try {
    await CreateMovieSchema.validateAsync(args)
  } catch (error) {
    throw new GraphQLError(formatErrorMessage(error.message))
  }
  return resolve(root, args, context, info)
}

export default CreateMovieValidator
