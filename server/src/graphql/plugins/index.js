import { useGraphQLMiddleware } from '@envelop/graphql-middleware'
import { SignupValidator, LoginValidator, UserExists } from '../middlewares'

const SchemaValidation = {
  Mutation: {
    signup: SignupValidator,
    login: LoginValidator
  }
}

const UserExistsValidation = {
  Mutation: {
    signup: UserExists
  }
}

const plugins = [useGraphQLMiddleware([SchemaValidation, UserExistsValidation])]

export default plugins
