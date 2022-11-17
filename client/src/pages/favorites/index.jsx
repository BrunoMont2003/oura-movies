import AuthenticatedLayout from '../../layouts/authenticated'
import { useQuery } from '@apollo/client'
import { GET_FAVORITE_MOVIES } from '../../graphql/queries/movies'
import Spinner from '../../components/common/Spinner'
import MovieCard from '../../components/MovieCard'
function Favorites () {
  const { loading, error, data } = useQuery(GET_FAVORITE_MOVIES)

  return (
    <AuthenticatedLayout>
      <section className='w-full  flex flex-col items-center'>
        <h2 className='text-4xl mb-5 font-bold'>Favorites</h2>
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
            : data.getFavoriteMovies.length
              ? (
                <div className='flex flex-wrap justify-center items-center gap-10 pt-12 px-5 lg:px-16'>
                  {data.getFavoriteMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
                )
              : (
                <div className='flex items-center justify-center min-h-[50vh] p-5'>
                  <h3 className='text-xl'>No Favorites added yet</h3>
                </div>
                )}
      </section>
    </AuthenticatedLayout>
  )
}

export default Favorites
