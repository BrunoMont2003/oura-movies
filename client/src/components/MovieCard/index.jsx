import './style.css'
import LikeButton from '../LikeButton'
import Button from '../common/Button'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
function MovieCard ({ movie }) {
  const navigate = useNavigate()
  return (
    <div
      className='relative card-movie-bg rounded flex items-end w-[200px] h-[300px]'
      style={{
        backgroundImage: `url(${movie.poster_path})`
      }}
    >
      <div
        onClick={() => navigate(`/movies/${movie.id}`)}
        className='absolute w-full h-full rounded z-0'
      />

      <div className=' card-movie-menu p-5  flex-col gap-2 z-10'>
        <div className='flex gap-1'>
          <LikeButton movie={movie} />
          <Button
            isLink
            to={`/movies/${movie.id}`}
            className='p-3 rounded cursor-pointer bg-blue-600'
          >
            <InfoCircledIcon />
          </Button>
        </div>
        <h4 className='font-black text-xs bg-black bg-opacity-50'>
          {movie.title}
        </h4>
      </div>
    </div>
  )
}

export default MovieCard
