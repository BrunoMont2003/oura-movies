import './style.css'
import { useQuery } from '@apollo/client'
import { GET_POSTERS } from '../../graphql/queries/movies'
import { getSomeRandomElements } from '../../helpers/array'
import Spinner from '../common/Spinner'
import { useEffect, useState } from 'react'
function GuestBg () {
  const { data, error, loading } = useQuery(GET_POSTERS)
  const [bgHeight, setBgHeight] = useState('100vh')
  useEffect(() => {
    const handleResize = () => {
      setBgHeight(document.body.clientHeight)
      console.log('resize')
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (loading) {
    return (
      <div className='min-h-screen  w-full flex items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  if (error) return <div>Something went Wrong</div>
  const { getMovieCatalogs: movies } = data
  const posters = movies.map(({ poster_path: poster }) => poster)
  const randomPosters = getSomeRandomElements(posters, 160)
  return (
    <div
      className='bg-neutral-800 guest-bg grid grid-cols-4 md:grid-cols-7 lg:grid-cols-8 xl:flex xl:flex-wrap overflow-x-hidden -z-10 justify-between '
      style={{
        height: bgHeight
      }}
    >
      {randomPosters.map((poster, index) => (
        <div
          key={index}
          className='guest-bg__poster'
          style={{
            backgroundImage: `url(${poster})`
          }}
        />
      ))}
    </div>
  )
}

export default GuestBg
