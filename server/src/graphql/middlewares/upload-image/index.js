import { GraphQLError } from 'graphql'
import MovieCatalog from '../../../models/MovieCatalog'
import {
  SaveToCloudinary,
  DeleteFromCloudinary
} from '../../../services/cloudinary'
import { deleteFile, saveBase64File } from '../../../helpers/files'
const UploadImage = async (resolve, root, args, context, info) => {
  if (!args.input.poster_path.startsWith('data:image')) {
    return resolve(root, args, context, info)
  }

  try {
    const movieCatalog = await MovieCatalog.findById(args.id)
    DeleteFromCloudinary(movieCatalog.poster_path)
    const { poster_path: file, title } = args.input
    const { id: userId } = context.currentUser
    const filePath = saveBase64File(file, `${title}-${userId}.png`)
    const url = await SaveToCloudinary(filePath)
    args.input.poster_path = url
    deleteFile(filePath)
    return resolve(root, args, context, info)
  } catch (error) {
    throw new GraphQLError(error.message)
  }
}

export default UploadImage
