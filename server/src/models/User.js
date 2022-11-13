import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites_movies: {
    type: [Schema.Types.ObjectId],
    ref: 'MovieCatalog'
  }
})

export default model('User', userSchema)
