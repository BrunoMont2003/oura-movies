import { gql } from '@apollo/client'

export const GET_MOVIES = gql`
  query movies {
    getMovieCatalogs {
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

export const GET_POSTERS = gql`
  query posters {
    getMovieCatalogs {
      poster_path
    }
  }
`
