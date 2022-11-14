import { gql } from '@apollo/client'

export const ADD_MOVIE = gql`
  mutation addMovie(
    $original_language: String!
    $original_title: String!
    $overview: String!
    $popularity: Float!
    $poster_path: String!
    $release_date: String!
    $title: String!
    $video: Boolean!
    $vote_average: Float!
    $vote_count: Int!
  ) {
    addMovieCatalog(
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
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
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
