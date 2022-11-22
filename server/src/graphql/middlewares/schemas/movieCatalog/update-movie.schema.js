import Joi from 'joi'
import IsValidID from '../../../../helpers/is-valid-id'

const UpdateMovieSchema = Joi.object({
  id: Joi.string()
    .required()
    .custom((value, helpers) => IsValidID(value, helpers)),
  input: Joi.object({
    original_language: Joi.string()
      .required()
      .regex(/^[a-z]{2}$/)
      .message('The original language must be a two-letter ISO 639-1 code'),
    original_title: Joi.string().required(),
    overview: Joi.string().required().min(50),
    popularity: Joi.number().required(),
    poster_path: Joi.string()
      .required()
      .regex(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)$/)
      .message('poster_path must be a valid URL image'),
    release_date: Joi.string()
      .required()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .message('Release date must be a valid date'),
    title: Joi.string().required(),
    video: Joi.boolean().default(false),
    vote_average: Joi.number().required(),
    vote_count: Joi.number().default(0),
    user_id: Joi.string()
  }).required()
})

export default UpdateMovieSchema
