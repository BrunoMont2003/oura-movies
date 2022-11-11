import getMoviesFromTMDB from '../services/getMoviesFromTMDB'
import MovieCatalog from '../models/MovieCatalog'

async function seedMovieCatalog () {
  try {
    const numberOfDocumentsAlreadyInDB = await MovieCatalog.countDocuments()
    if (numberOfDocumentsAlreadyInDB === 0) {
      const movies = await getMoviesFromTMDB()
      const insertedMovies = await MovieCatalog.insertMany(movies)
      console.log(insertedMovies)
    }
  } catch (error) {
    console.log(error.message)
  }
}

export default seedMovieCatalog
