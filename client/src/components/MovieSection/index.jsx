import './style.css'
import moment from 'moment'
import RatingCircle from '../common/RatingCircle'
import LikeButton from '../LikeButton'
import { Pencil1Icon } from '@radix-ui/react-icons'
import Button from '../common/Button'
function MovieSection ({ movie = {} }) {
  return (
    <div className='flex flex-col lg:flex-row bg-teal-500 bg-opacity-25 w-full xl:max-w-[1500px] xl:py-16 px-10 md:px-16 py-10 gap-10 items-center'>
      <figure className='w-[300px]'>
        <img src={movie.poster_path} alt={movie.title} className='w-full rounded' />
      </figure>
      <article className='lg:mt-16 lg:max-w-[calc(100%-350px)]'>
        <h2 className='text-4xl font-bold'>{movie.title}</h2>
        <div className='flex gap-1 font-normal mt-1'>
          <span>
            {moment(movie.release_date).format('DD MMMM YYYY')}
          </span>
          <span className='uppercase'>
            ({movie.original_language})
          </span>
        </div>
        <div className='flex gap-2 items-center py-5 '>
          <RatingCircle rate={movie.vote_average} />
          <span className='font-bold text-md max-w-[3rem]'>User Score</span>
          <LikeButton movie={movie} className='rounded-full bg-slate-700 p-4 bg-opacity-70' />
          <Button
            className='rounded-full bg-slate-700 p-4 bg-opacity-70 text-white'
            isLink
            to={`/movies/${movie.id}/edit`}
          >
            <Pencil1Icon className='w-[15px] h-[15px]' />
          </Button>
        </div>
        <div className='my-5'>
          <h4 className='font-bold text-xl'>Overview</h4>
          <p className=' font-normal mt-1 text-justify'>
            {movie.overview}
          </p>
        </div>
      </article>
    </div>
  )
}

export default MovieSection
