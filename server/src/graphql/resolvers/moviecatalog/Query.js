import MovieCatalog from '../../../models/MovieCatalog'

const MovieCatalogQueries = {
  getMovieCatalogs: async () => {
    const movieCatalogs = await MovieCatalog.find()
    return movieCatalogs
  },
  getMovieCatalog: async (_, { id }) => {
    const movieCatalog = await MovieCatalog.findById(id)
    return movieCatalog
  }
}

export default MovieCatalogQueries
