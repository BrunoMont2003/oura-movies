import './style.css'
import { useQuery } from '@apollo/client'
import { GET_POSTERS } from '../../graphql/queries/movies'
import { getSomeRandomElements } from '../../helpers/array'
import Spinner from '../Spinner'
import { useEffect, useState } from 'react'
function GuestBg () {
  const { data, error, loading } = useQuery(GET_POSTERS)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [bgHeight, setBgHeight] = useState(0)
  useEffect(() => {
    if (isFirstRender) {
      setBgHeight(document.body.clientHeight / 2)
      setIsFirstRender(false)
    }

    const handleResize = () => {
      setBgHeight(document.body.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
    <div
      className='bg-neutral-800 guest-bg flex flex-wrap overflow-x-hidden -z-10 items-center justify-center'
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
