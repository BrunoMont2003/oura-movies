/* eslint-disable camelcase */
import { GraphQLYogaError } from '@graphql-yoga/node'
import MovieCatalog from '../../../models/MovieCatalog'

const MovieCatalogMutations = {
  addMovieCatalog: async (_, { input }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = new MovieCatalog({
      ...input,
      user_id: userId
    })
    try {
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
    return movieCatalog
  },
  updateMovieCatalog: async (_, { id, input }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = await MovieCatalog.findOne({
      _id: id,
      user_id: {
        $in: [userId, null]
      }
    })
    if (!movieCatalog) {
      throw new GraphQLYogaError('MovieCatalog not found')
    }
    try {
      movieCatalog.set(input)
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
    return movieCatalog
  },
  deleteMovieCatalog: async (_, { id }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = await MovieCatalog.findOneAndDelete({
      _id: id,
      user_id: {
        $in: [userId, null]
      }
    })
    if (!movieCatalog) {
      throw new GraphQLYogaError('Movie Catalog not found')
    }
    return movieCatalog
  },
  addFavoriteMovie: async (_, { movie_id: id }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = await MovieCatalog.findById(id)
    if (!movieCatalog) {
      throw new GraphQLYogaError('Movie Catalog not found')
    }
    const favoriteMovies = currentUser.favorites_movies
    const isFavorite = favoriteMovies.includes(id)
    if (isFavorite) {
      throw new GraphQLYogaError('Movie already in favorites')
    }
    try {
      currentUser.favorites_movies.push(movieCatalog)
      await currentUser.save()
      return currentUser.populate('favorites_movies')
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
  },
  removeFavoriteMovie: async (_, { movie_id: id }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = await MovieCatalog.findById(id)
    if (!movieCatalog) {
      throw new GraphQLYogaError('Movie Catalog not found')
    }
    const favoriteMovies = currentUser.favorites_movies
    const isFavorite = favoriteMovies.includes(id)
    if (!isFavorite) {
      throw new GraphQLYogaError('Movie is not in favorites')
    }

    try {
      currentUser.favorites_movies.pull(movieCatalog)
      await currentUser.save()
      return currentUser.populate('favorites_movies')
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
  }
}

export default MovieCatalogMutations
