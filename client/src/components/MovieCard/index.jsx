import './style.css'
import LikeButton from '../LikeButton'
function MovieCard ({ movie }) {
  return (
    <div
      className='card-movie-bg rounded flex items-end'
      style={{
        backgroundImage: `url(${movie.poster_path})`
      }}
    >

      <div className=' card-movie-menu p-5  flex-col gap-2'>
        <div className='flex gap-1'>
          <LikeButton />
          <LikeButton />
        </div>
        <h4 className='font-black text-xs bg-black bg-opacity-50'>{movie.title}</h4>
      </div>

    </div>
  )
}

export default MovieCard
