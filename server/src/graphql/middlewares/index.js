import SignupValidator from './validation/auth/signup.validator'
import LoginValidator from './validation/auth/login.validator'
import UserExists from './validation/auth/user-exists.validator'
import IsAuth from './validation/auth/is-auth.validator'
import CreateMovieValidator from './validation/movieCatalog/create-movie.validator'
import UpdateMovieValidator from './validation/movieCatalog/update-movie.validator'

export {
  SignupValidator,
  LoginValidator,
  UserExists,
  IsAuth,
  CreateMovieValidator,
  UpdateMovieValidator
}
