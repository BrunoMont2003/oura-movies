import { GraphQLYogaError } from '@graphql-yoga/node'
import MovieCatalog from '../../../models/MovieCatalog'
import User from '../../../models/User'

const MovieCatalogQueries = {
  getMovieCatalogs: async (root, args, { currentUser }) => {
    const id = currentUser ? currentUser.id : null
    const movieCatalogs = await MovieCatalog.find({
      user_id: {
        $in: [id, null]
      }
    })
    return movieCatalogs
  },
  getMovieCatalog: async (_, { id }, { currentUser }) => {
    const movieCatalog = await MovieCatalog.findById({
      id,
      user_id: {
        $in: [currentUser.id, null]
      }
    })
    return movieCatalog
  },
  getFavoriteMovies: async (_, args, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const user = await User.findById(userId)
      .select('-password')
      .populate('favorites_movies')
    return user.favorites_movies
  },
  getPopularMovies: async (_, args, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    const movies = await MovieCatalog.find({
      user_id: {
        $in: [userId, null]
      }
    }).sort({ popularity: -1 })

    return movies
  },
  getTopRatedMovies: async (_, args, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    const movies = await MovieCatalog.find({
      user_id: {
        $in: [userId, null]
      }
    }).sort({ vote_average: -1 })

    return movies
  },
  getTrendingNowMovies: async (_, args, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    const movies = await MovieCatalog.find({
      user_id: {
        $in: [userId, null]
      }
    }).sort({ vote_count: -1, release_date: -1 })

    return movies
  },
  isFavoriteMovie: async (_, { id }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    return currentUser.favorites_movies.includes(id)
  }
}

export default MovieCatalogQueries
