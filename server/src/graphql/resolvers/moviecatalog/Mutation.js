/* eslint-disable camelcase */
import { GraphQLYogaError } from '@graphql-yoga/node'
import MovieCatalog from '../../../models/MovieCatalog'
import User from '../../../models/User'

const MovieCatalogMutations = {
  addMovieCatalog: async (_, { input }) => {
    console.log('addMovieCatalog input:', input)
    const user = await User.findById(input.user_id)
    if (input.user_id && !user) {
      throw new GraphQLYogaError('User not found')
    }
    const movieCatalog = new MovieCatalog({
      ...input
    })
    try {
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
    return movieCatalog
  },
  updateMovieCatalog: async (_, { id, input }) => {
    const movieCatalog = await MovieCatalog.findById({
      _id: id
    })
    if (!movieCatalog) {
      throw new GraphQLYogaError('MovieCatalog not found')
    }
    try {
      movieCatalog.set(input)
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
    return movieCatalog
  }
}

export default MovieCatalogMutations
