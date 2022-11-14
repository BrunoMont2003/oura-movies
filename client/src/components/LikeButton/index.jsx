import { useQuery, useMutation } from '@apollo/client'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import * as Toggle from '@radix-ui/react-toggle'
import { useEffect, useState } from 'react'
import { IS_FAVORITE_MOVIE } from '../../graphql/queries/movies'
import {
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE
} from '../../graphql/mutations/movies'

const LikeButton = ({ movie = {} }) => {
  const { data: isFavoriteMovieData } = useQuery(IS_FAVORITE_MOVIE, {
    variables: { id: movie.id }
  })
  const [isFavorite, setIsFavorite] = useState(false)

  const [addFavoriteMovie] = useMutation(ADD_FAVORITE_MOVIE, {
    variables: { movieId: movie.id }
  })

  const [removeFavoriteMovie] = useMutation(REMOVE_FAVORITE_MOVIE, {
    variables: { movieId: movie.id }
  })

  useEffect(() => {
    if (isFavoriteMovieData) {
      setIsFavorite(isFavoriteMovieData.isFavoriteMovie)
    }
  }, [isFavoriteMovieData])

  const handleToggle = () => {
    if (isFavorite) {
      removeFavoriteMovie()
    } else {
      addFavoriteMovie()
    }
    setIsFavorite(!isFavorite)
  }
  return (
    <Toggle.Root
      className='p-3  bg-red-800 rounded cursor-pointer'
      aria-label='Like Toggle'
      onPressedChange={() => {
        handleToggle()
      }}
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </Toggle.Root>
  )
}

export default LikeButton
