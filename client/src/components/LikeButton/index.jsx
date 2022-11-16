import { useQuery, useMutation } from '@apollo/client'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import * as Toggle from '@radix-ui/react-toggle'
import { useEffect, useState } from 'react'
import {
  GET_FAVORITE_MOVIES,
  IS_FAVORITE_MOVIE
} from '../../graphql/queries/movies'
import {
  ADD_FAVORITE_MOVIE,
  REMOVE_FAVORITE_MOVIE
} from '../../graphql/mutations/movies'
import { toast } from 'react-toastify'

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

  const queriesToRefetch = [
    {
      query: GET_FAVORITE_MOVIES
    },
    {
      query: IS_FAVORITE_MOVIE,
      variables: { id: movie.id }
    }
  ]

  useEffect(() => {
    if (isFavoriteMovieData) {
      setIsFavorite(isFavoriteMovieData.isFavoriteMovie)
    }
  }, [isFavoriteMovieData])

  const handleToggle = async () => {
    setIsFavorite(!isFavorite)
    try {
      if (isFavorite) {
        await removeFavoriteMovie({
          refetchQueries: [...queriesToRefetch],
          onCompleted: () => {
            toast.success('Movie removed from favorites', {
              autoClose: 3000
            })
          },
          onError: (error) => {
            toast(error.message, { type: 'warning', autoClose: 3000 })
          }
        })
      } else {
        await addFavoriteMovie({
          refetchQueries: [...queriesToRefetch],
          onCompleted: () => {
            toast.success('Movie added to favorites', {
              autoClose: 3000
            })
          },
          onError: (error) => {
            toast(error.message, { type: 'warning', autoClose: 3000 })
          }
        })
      }
    } catch (error) {
      toast(error.message, { type: 'warning', autoClose: 3000 })
    }
  }
  return (
    <Toggle.Root
      className='p-3  bg-red-800 rounded cursor-pointer'
      aria-label='Like Toggle'
      onPressedChange={async () => {
        await handleToggle()
      }}
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </Toggle.Root>
  )
}

export default LikeButton
