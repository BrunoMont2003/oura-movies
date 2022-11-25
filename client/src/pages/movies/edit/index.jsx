import { useNavigate, useParams } from 'react-router-dom'
import AuthenticatedLayout from '../../../layouts/authenticated'
import {
  GET_MOVIE,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED,
  GET_TRENDING_NOW
} from '../../../graphql/queries/movies'
import { useQuery, useMutation } from '@apollo/client'
import Spinner from '../../../components/common/Spinner'
import ErrorMessage from '../../../components/common/Error'
import Form from '../../../components/common/Form'
import { UPDATE_MOVIE } from '../../../graphql/mutations/movies'
import { toast } from 'react-toastify'
import UpdateMovieSchema from '../../../validation/movies/update-movie'
import DynamicImage from '../../../components/DynamicImage'
function EditMovie () {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      id
    }
  })
  const navigate = useNavigate()
  const [updateMovie] = useMutation(UPDATE_MOVIE, {
    onCompleted: () => {
      toast.success('Movie updated successfully', {
        autoClose: 3000
      })
      navigate('/')
    },
    onError: (e) => {
      console.error(e)
      toast.error(e.message, {
        autoClose: 3000
      })
    },
    refetchQueries: [
      {
        query: GET_MOVIE,
        variables: {
          id
        }
      },
      {
        query: GET_TOP_RATED
      },
      {
        query: GET_POPULAR_MOVIES
      },
      {
        query: GET_TRENDING_NOW
      }
    ]
  })
  const initialValues = {
    original_title: data?.getMovieCatalog?.original_title,
    title: data?.getMovieCatalog?.title,
    overview: data?.getMovieCatalog?.overview,
    poster_path: data?.getMovieCatalog?.poster_path,
    vote_average: data?.getMovieCatalog?.vote_average,
    release_date: data?.getMovieCatalog?.release_date,
    original_language: data?.getMovieCatalog?.original_language,
    popularity: data?.getMovieCatalog?.popularity
  }
  const inputs = [
    {
      name: 'original_title',
      label: 'Original Title',
      type: 'text',
      placeholder: 'Enter original title'
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      placeholder: 'Enter title'
    },
    {
      name: 'overview',
      label: 'Overview',
      as: 'textarea',
      placeholder: 'Enter overview'
    },
    {
      name: 'poster_path',
      label: 'Poster Path',
      placeholder: 'Enter poster path',
      isImage: true
    },
    {
      name: 'vote_average',
      label: 'Vote Average',
      type: 'number',
      placeholder: 'Enter vote average'
    },
    {
      name: 'release_date',
      label: 'Release Date',
      type: 'date',
      placeholder: 'Enter release date'
    },
    {
      name: 'original_language',
      label: 'Original Language',
      type: 'text',
      placeholder: 'Enter original language'
    },
    {
      name: 'popularity',
      label: 'Popularity',
      type: 'number',
      placeholder: 'Enter popularity'
    }
  ]

  const handleSubmit = (values) => {
    updateMovie({
      variables: {
        id,
        ...values
      }
    })
  }

  return (
    <AuthenticatedLayout>
      {loading && <Spinner />}
      {data && (
        <div className='flex flex-col md:flex-row gap-5 justify-center'>
          <div className='px-10 flex flex-col md:py-20 items-center md:max-w-[350px]'>
            <h2 className='text-xl font-black text-lime-100 text-center mb-5'>
              {data.getMovieCatalog.title}
            </h2>
            <DynamicImage
              src={data.getMovieCatalog.poster_path}
              alt={`${data.getMovieCatalog.title} poster`}
            />
          </div>
          <div className='px-10'>
            <h1 className='text-3xl font-bold text-center mb-10'>Edit Movie</h1>
            <Form
              inputs={inputs}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={UpdateMovieSchema}
            />
          </div>
        </div>
      )}
      {error && <ErrorMessage title='Movie not found' />}
    </AuthenticatedLayout>
  )
}

export default EditMovie
