import { useGraphQLMiddleware } from '@envelop/graphql-middleware'
import {
  SignupValidator,
  LoginValidator,
  UserExists,
  IsAuth
} from '../middlewares'

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

const IsAuthValidation = {
  Mutation: {
    addMovieCatalog: IsAuth,
    updateMovieCatalog: IsAuth,
    deleteMovieCatalog: IsAuth,
    addFavoriteMovie: IsAuth,
    removeFavoriteMovie: IsAuth
  },
  Query: {
    getFavoriteMovies: IsAuth,
    isFavoriteMovie: IsAuth
  }
}

const plugins = [
  useGraphQLMiddleware([
    SchemaValidation,
    UserExistsValidation,
    IsAuthValidation
  ])
]

export default plugins
