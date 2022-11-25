import { v2 as cloudinary } from 'cloudinary'
import config from '../configs/general.config'
import { getIdFromUrl } from '../helpers/cloudinary'

cloudinary.config({
  cloud_name: config.external.api.cloudinary.name,
  api_key: config.external.api.cloudinary.key,
  api_secret: config.external.api.cloudinary.secret,
  secure: true
})

export const SaveToCloudinary = async (filePath) => {
  const { secure_url: url } = await cloudinary.uploader.upload(
    filePath,
    {
      folder: 'movies'
    }
  )
  return url
}

export const isACloudinaryUrl = (url) => {
  return url.startsWith('https://res.cloudinary.com')
}

export const DeleteFromCloudinary = async (url) => {
  if (!isACloudinaryUrl(url)) return
  const id = getIdFromUrl(url)
  await cloudinary.uploader.destroy(id)
}
