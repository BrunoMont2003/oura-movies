import './style.css'
import { GET_MOVIES } from '../../graphql/queries/movies'
import { useQuery } from '@apollo/client'
import Button from '../Button'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import LikeButton from '../LikeButton'
import Spinner from '../Spinner'
function MainMovieBanner () {
  const { loading, error, data } = useQuery(GET_MOVIES)
  if (loading) {
    return (
      <div className='min-h-[80vh] w-full flex items-center justify-center bg-neutral-900'>
        <Spinner />
      </div>
    )
  }
  if (error) return <div className='min-h-[80vh] bg-neutral-800 flex items-center justify-center'>Something went Wrong</div>
  const randomMovie =
    data.getMovieCatalogs[
      Math.floor(Math.random() * data.getMovieCatalogs.length)
    ]
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${randomMovie.poster_path})`
        }}
        className='absolute top-0 bg-black  w-full min-h-[600px] max-h-[80vh] -z-10 bg-movie'
      />
      <div className='relative w-full min-h-[600px] max-h-[80vh] flex items-end justify-center py-10'>
        <div className='max-w-[500px] min-w-[200px] lg:max-w-[400px] flex flex-col gap-2  absolute lg:bottom-1/4  lg:left-16'>
          <h1 className='font-bold text-5xl mb-5'>{randomMovie.title}</h1>
          <p>
            {randomMovie.overview.length > 100
              ? randomMovie.overview.slice(0, 100) + '...'
              : randomMovie.overview}
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
