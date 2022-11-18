import MovieSection from '../../components/MovieSection'
import Spinner from '../../components/common/Spinner'
import AuthenticatedLayout from '../../layouts/authenticated/'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_MOVIE } from '../../graphql/queries/movies'
import ErrorMessage from '../../components/common/Error'
const Movie = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id }
  })

  return (
    <AuthenticatedLayout>
      {loading && <Spinner />}
      {data && <MovieSection movie={data.getMovieCatalog} />}
      {error && <ErrorMessage title='Movie not found' />}
    </AuthenticatedLayout>
  )
}

export default Movie
