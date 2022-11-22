import { useGraphQLMiddleware } from '@envelop/graphql-middleware'
import {
  SignupValidator,
  LoginValidator,
  UserExists,
  IsAuth,
  CreateMovieValidator,
  UpdateMovieValidator
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

const MovieCatalogValidation = {
  Mutation: {
    addMovieCatalog: CreateMovieValidator,
    updateMovieCatalog: UpdateMovieValidator
  }
}

const plugins = [
  useGraphQLMiddleware([
    SchemaValidation,
    UserExistsValidation,
    IsAuthValidation,
    MovieCatalogValidation
  ])
]

export default plugins
