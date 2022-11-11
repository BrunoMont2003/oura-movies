import config from '../configs/general.config'

const ENDPOINT = `${config.external.api.tmdb.url}/movie/top_rated?api_key=${config.external.api.tmdb.key}`

const getMoviesFromTMDB = async (numberOfMovies = 30) => {
  const movies = []
  const response = await fetch(ENDPOINT)
  const { page, results } = await response.json()
  movies.push(...results)
  let i = 1
  while (movies.length < numberOfMovies) {
    const response = await fetch(`${ENDPOINT}&page=${page + i}`)
    const { results } = await response.json()
    movies.push(...results)
    i++
  }
  movies.splice(numberOfMovies)
  return movies
}

export default getMoviesFromTMDB
