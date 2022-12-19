import config from '../configs/general.config'
import shuffle from '../helpers/shuffle'
const ENDPOINT = (kind) =>
  `${config.external.api.tmdb.url}/movie/${kind}?api_key=${config.external.api.tmdb.key}`

const kinds = ['top_rated', 'upcoming', 'popular', 'now_playing']

const getMoviesFromTMDB = async (numberOfMovies = 120) => {
  let movies = []
  let i = 1
  while (movies.length < numberOfMovies) {
    for (const kind of kinds) {
      const response = await fetch(`${ENDPOINT(kind)}&page=${i}`)
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
  }
  movies = shuffle(movies)
  movies.splice(numberOfMovies)
  return movies
}

export default getMoviesFromTMDB
