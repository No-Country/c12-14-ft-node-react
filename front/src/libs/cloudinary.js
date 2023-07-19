import { Cloudinary } from 'cloudinary-core'

export const cloudinaryCore = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
})
