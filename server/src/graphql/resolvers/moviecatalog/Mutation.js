/* eslint-disable camelcase */
import { GraphQLYogaError } from '@graphql-yoga/node'
import MovieCatalog from '../../../models/MovieCatalog'

const MovieCatalogMutations = {
  addMovieCatalog: async (_, { input }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = new MovieCatalog({
      ...input,
      user_id: userId
    })
    try {
      await movieCatalog.save()
    } catch (error) {
      throw new GraphQLYogaError(error.message)
    }
    return movieCatalog
  },
  updateMovieCatalog: async (_, { id, input }, { currentUser }) => {
    const userId = currentUser ? currentUser.id : null
    if (!userId) {
      throw new GraphQLYogaError('Not authenticated')
    }
    const movieCatalog = await MovieCatalog.findById({
      _id: id,
      user_id: userId
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
