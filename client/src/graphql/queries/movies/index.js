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

export const GET_POPULAR_MOVIES = gql`
  query popularMovies {
    getPopularMovies {
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

export const GET_TRENDING_NOW = gql`
  query trendingNow {
    getTrendingNowMovies {
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

export const GET_TOP_RATED = gql`
  query topRated {
    getTopRatedMovies {
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

export const IS_FAVORITE_MOVIE = gql`
  query isFavoriteMovie($id: ID!) {
    isFavoriteMovie(id: $id)
  }
`

export const GET_FAVORITE_MOVIES = gql`
  query favoriteMovies {
    getFavoriteMovies {
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

export const SEARCH_MOVIES = gql`
  query searchMovies($query: String!) {
    searchMovies(query: $query) {
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
export const GET_MOVIE = gql`
  query movie ($id: ID!) {
    getMovieCatalog (id: $id) {
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
