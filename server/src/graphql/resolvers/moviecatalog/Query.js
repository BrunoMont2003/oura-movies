import MovieCatalog from '../../../models/MovieCatalog'

const MovieCatalogQueries = {
  getMovieCatalogs: async (root, args, context) => {
    console.log('context', context.currentUser)
    const movieCatalogs = await MovieCatalog.find()
    return movieCatalogs
  },
  getMovieCatalog: async (_, { id }) => {
    const movieCatalog = await MovieCatalog.findById(id)
    return movieCatalog
  }
}

export default MovieCatalogQueries
