import * as Yup from 'yup'

const UpdateMovieSchema = Yup.object().shape({
  original_title: Yup.string().required('The original title is required'),
  title: Yup.string().required('The title is required'),
  overview: Yup.string().required('The description is required'),
  poster_path: Yup.string().required('The poster path is required'),
  vote_average: Yup.number()
    .required('The vote average is required')
    .min(0, 'The vote average must be greater than 0')
    .max(10, 'The vote average must be less than 10'),
  release_date: Yup.string().required('The release date is required'),
  original_language: Yup.string()
    .required('The language is required')
    .length(2, 'The language must be 2 characters'),
  popularity: Yup.number()
    .required('The popularity is required')
    .min(0, 'The popularity must be greater than 0')
})

export default UpdateMovieSchema
