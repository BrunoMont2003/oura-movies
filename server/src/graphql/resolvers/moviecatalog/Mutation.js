/* eslint-disable camelcase */
import { GraphQLError } from 'graphql'
import MovieCatalog from '../../../models/MovieCatalog'

const MovieCatalogMutations = {
  addMovieCatalog: async (_, { input }, { currentUser }) => {
    const movieCatalog = new MovieCatalog({
      ...input,
      user_id: currentUser.id
    })
    try {
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLError(error.message)
    }
    return movieCatalog
  },
  updateMovieCatalog: async (_, { id, input }, { currentUser }) => {
    const movieCatalog = await MovieCatalog.findOne({
      _id: id,
      user_id: {
        $in: [currentUser.id, null]
      }
    })
    if (!movieCatalog) {
      throw new GraphQLError('MovieCatalog not found')
    }
    try {
      movieCatalog.set(input)
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLError(error.message)
    }
    return movieCatalog
  },
  deleteMovieCatalog: async (_, { id }, { currentUser }) => {
    const movieCatalog = await MovieCatalog.findOneAndDelete({
      _id: id,
      user_id: {
        $in: [currentUser.id, null]
      }
    })
    if (!movieCatalog) {
      throw new GraphQLError('Movie Catalog not found')
    }
    return movieCatalog
  },
  addFavoriteMovie: async (_, { movie_id: id }, { currentUser }) => {
    const movieCatalog = await MovieCatalog.findById(id)
    if (!movieCatalog) {
      throw new GraphQLError('Movie Catalog not found')
    }
    const favoriteMovies = currentUser.favorites_movies
    const isFavorite = favoriteMovies.includes(id)
    if (isFavorite) {
      throw new GraphQLError('Movie already in favorites')
    }
    try {
      currentUser.favorites_movies.push(movieCatalog)
      await currentUser.save()
      return currentUser.populate('favorites_movies')
    } catch (error) {
      throw new GraphQLError(error.message)
    }
  },
  removeFavoriteMovie: async (_, { movie_id: id }, { currentUser }) => {
    const movieCatalog = await MovieCatalog.findById(id)
    if (!movieCatalog) {
      throw new GraphQLError('Movie Catalog not found')
    }
    const favoriteMovies = currentUser.favorites_movies
    const isFavorite = favoriteMovies.includes(id)
    if (!isFavorite) {
      throw new GraphQLError('Movie is not in favorites')
    }

    try {
      currentUser.favorites_movies.pull(movieCatalog)
      await currentUser.save()
      return currentUser.populate('favorites_movies')
    } catch (error) {
      throw new GraphQLError(error.message)
    }
  }
}

export default MovieCatalogMutations
