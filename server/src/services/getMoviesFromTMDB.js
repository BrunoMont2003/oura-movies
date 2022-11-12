import config from '../configs/general.config'

const ENDPOINT = `${config.external.api.tmdb.url}/movie/top_rated?api_key=${config.external.api.tmdb.key}`

const getMoviesFromTMDB = async (numberOfMovies = 30) => {
  const movies = []
  let i = 1
  while (movies.length < numberOfMovies) {
    const response = await fetch(`${ENDPOINT}&page=${i}`)
    const { results } = await response.json()
    for (const movie of results) {
      const { poster_path: posterPath } = movie
      const poster = `${config.external.api.tmdb.image_url}${posterPath}`
      movies.push({
        ...movie,
        poster_path: poster
      })
    }
    i++
  }
  movies.splice(numberOfMovies)
  return movies
}

export default getMoviesFromTMDB
