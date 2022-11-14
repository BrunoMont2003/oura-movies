import { GET_MOVIES } from '../../graphql/queries/movies'
import { useQuery } from '@apollo/client'
import MovieCard from '../MovieCard'

function Popular () {
  const { loading, error, data } = useQuery(GET_MOVIES)
  return (
    <div className='bg-neutral-800 w-screen p-5 relative lg:px-16'>
      <h2 className='text-2xl mb-5'>Popular on Oura</h2>
      <section className='flex gap-2 overflow-x-scroll overflow-y-visible py-5'>
        {loading
          ? (
            <p>Loading...</p>
            )
          : error
            ? (
              <p>Error :(</p>
              )
            : (
                data.getMovieCatalogs.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              )}
      </section>
    </div>
  )
}

export default Popular
