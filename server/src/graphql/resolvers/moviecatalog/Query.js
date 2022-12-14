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
    const userId = currentUser ? currentUser.id : null
    const movieCatalog = await MovieCatalog.findOne({
      _id: id,
      user_id: {
        $in: [userId, null]
      }
    })
    return movieCatalog
  },
  getFavoriteMovies: async (_, args, { currentUser }) => {
    const user = await User.findById(currentUser.id)
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
  isFavoriteMovie: async (_, { id }, { currentUser }) =>
    currentUser.favorites_movies.includes(id),
  searchMovies: async (_, { query }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    const movies = await MovieCatalog.find({
      user_id: {
        $in: [userId, null]
      },
      title: {
        $regex: query,
        $options: 'i'
      }
    })
    return movies
  }
}

export default MovieCatalogQueries
