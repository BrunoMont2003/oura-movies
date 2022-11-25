import { GraphQLError } from 'graphql'

const IsAuth = (resolve, root, args, context, info) => {
  if (!context.currentUser) {
    throw new GraphQLError('Not authenticated.')
  }

  return resolve(root, args, context, info)
}

export default IsAuth
