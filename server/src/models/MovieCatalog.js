import { model, Schema } from 'mongoose'

const movieCatalogSchema = new Schema({
  original_language: {
    type: String,
    required: true,
    match: /^[a-z]{2}$/
  },
  original_title: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true,
    minLength: 50
  },
  popularity: {
    type: Number,
    required: true
  },
  poster_path: {
    type: String,
    required: true,
    match: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)$/
  },
  release_date: {
    type: Date,
    required: true,
    min: '1900-01-01',
    max: Date.now
  },
  title: {
    type: String,
    required: true
  },
  video: {
    type: Boolean,
    default: false
  },
  vote_average: {
    type: Number,
    required: true
  },
  vote_count: {
    type: Number,
    default: 0
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model('MovieCatalog', movieCatalogSchema)
