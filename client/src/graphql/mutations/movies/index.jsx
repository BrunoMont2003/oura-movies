import { gql } from '@apollo/client'

export const UPDATE_MOVIE = gql`
  mutation updateMovie(
    $id: ID!
    $original_language: String
    $original_title: String
    $overview: String
    $popularity: Float
    $poster_path: String
    $release_date: String
    $title: String
    $video: Boolean
    $vote_average: Float
    $vote_count: Int
  ) {
    updateMovieCatalog(
      id: $id
      input: {
        original_language: $original_language
        original_title: $original_title
        overview: $overview
        popularity: $popularity
        poster_path: $poster_path
        release_date: $release_date
        title: $title
        video: $video
        vote_average: $vote_average
        vote_count: $vote_count
      }
    ) {
      id
      title
    }
  }
`
export const ADD_FAVORITE_MOVIE = gql`
  mutation likeMovie($movieId: ID!) {
    addFavoriteMovie(movie_id: $movieId) {
      name
      favorites_movies {
        id
        title
      }
    }
  }
`

export const REMOVE_FAVORITE_MOVIE = gql`
  mutation removeFavoriteMovie($movieId: ID!) {
    removeFavoriteMovie(movie_id: $movieId) {
      name
      favorites_movies {
        id
        title
      }
    }
  }
`
