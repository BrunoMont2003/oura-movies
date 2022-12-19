import getMoviesFromTMDB from '../services/getMoviesFromTMDB'
import MovieCatalog from '../models/MovieCatalog'
import lorem from '../helpers/lorem'

async function seedMovieCatalog () {
  try {
    const numberOfDocumentsAlreadyInDB = await MovieCatalog.countDocuments()
    if (numberOfDocumentsAlreadyInDB === 0) {
      let movies = await getMoviesFromTMDB()
      movies = movies.map((movie) => {
        if (!movie.overview) movie.overview = lorem()

        return movie
      })
      const insertedMovies = await MovieCatalog.insertMany(movies)
      console.log(insertedMovies)
    }
  } catch (error) {
    console.log(error.message)
  }
}

export default seedMovieCatalog
