import MovieCatalog from '../../../models/MovieCatalog'

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
  }
}

export default MovieCatalogQueries
