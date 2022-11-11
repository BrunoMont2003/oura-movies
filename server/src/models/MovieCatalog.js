import { model, Schema } from 'mongoose'

const movieCatalogSchema = new Schema({
  original_language: {
    type: String,
    required: true
  },
  original_title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  popularity: {
    type: Number,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  video: {
    type: Boolean,
    required: true
  },
  vote_average: {
    type: Number,
    required: true
  },
  vote_count: {
    type: Number,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model('MovieCatalog', movieCatalogSchema)
