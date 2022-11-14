import './style.css'
import { GET_MOVIES } from '../../graphql/queries/movies'
import { useQuery } from '@apollo/client'
import Button from '../Button'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import LikeButton from '../LikeButton'
function MainMovieBanner () {
  const { loading, error, data } = useQuery(GET_MOVIES)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const randomMovie =
    data.getMovieCatalogs[
      Math.floor(Math.random() * data.getMovieCatalogs.length)
    ]
  return (
    <>
      <div
        style={
        {
          backgroundImage: `url(${randomMovie.poster_path})`
        }
      } className='absolute top-0 bg-black  w-full min-h-[600px] max-h-[80vh] -z-10 bg-movie'
      />
      <div className='relative w-full min-h-[600px] max-h-[80vh] '>
        <div className='max-w-[300px] min-w-[200px] lg:max-w-[400px] flex flex-col gap-2  absolute top-1/4 left-5 lg:left-16'>
          <h1 className='font-bold text-5xl mb-5'>{randomMovie.title}</h1>
          <p>
            {
              randomMovie.overview.length > 100 ? randomMovie.overview.slice(0, 100) + '...' : randomMovie.overview
            }
          </p>
          <div className='flex gap-1'>
            <LikeButton />
            <Button className='p-3 cursor-pointer bg-teal-400 bg-opacity-50 rounded flex items-center gap-2'>
              More Info
              <InfoCircledIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainMovieBanner
