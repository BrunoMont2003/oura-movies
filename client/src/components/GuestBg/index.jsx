import './style.css'
import { useQuery } from '@apollo/client'
import { GET_POSTERS } from '../../graphql/queries/movies'
import { getSomeRandomElements } from '../../helpers/array'
import Spinner from '../Spinner'
function GuestBg () {
  const { data, error, loading } = useQuery(GET_POSTERS)
  if (loading) {
    return (
      <div className='min-h-screen w-full flex items-center justify-center'>
        <Spinner />
      </div>
    )
  }
  if (error) return <div>Error</div>
  const { getMovieCatalogs: movies } = data
  const posters = movies.map(({ poster_path: poster }) => poster)
  const randomPosters = getSomeRandomElements(posters, 30)
  return (
    <div className='bg-neutral-800 guest-bg grid grid-cols-3 md:grid-cols-4 lg:grid-cols6 xl:grid-cols-7  overflow-hidden -z-10'>
      {randomPosters.map((poster, index) => (
        <img key={index} className='guest-bg__poster' src={poster} />
      ))}
    </div>
  )
}

export default GuestBg
