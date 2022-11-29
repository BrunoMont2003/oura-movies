import { GET_TRENDING_NOW } from '../../graphql/queries/movies'
import { useQuery } from '@apollo/client'
import MovieCard from '../MovieCard'
import Spinner from '../common/Spinner'

function TrendingNow () {
  const { loading, error, data } = useQuery(GET_TRENDING_NOW)
  return (
    <div className='w-100 p-5 relative lg:px-16'>
      <h2 className='text-2xl font-bold'>Trending Now</h2>
      <section className='flex gap-2 overflow-x-scroll overflow-y-visible py-5' style={{ scrollbarWidth: 'none' }}>
        {loading
          ? (
            <div className='min-h-[300px] w-full flex items-center justify-center bg-neutral-900'>
              <Spinner />
            </div>
            )
          : error
            ? (
              <div className='bg-neutral-800 flex items-center justify-center'>
                Something went Wrong
              </div>
              )
            : (
                data.getTrendingNowMovies
                  .slice(0, 10)
                  .map((movie) => <MovieCard key={movie.id} movie={movie} />)
              )}
      </section>
    </div>
  )
}

export default TrendingNow
