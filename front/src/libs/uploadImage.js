import { cloudinaryCore } from './cloudinary'

export const uploadImage = async (file, width, height) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append(
    'upload_preset',
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  )

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${
        cloudinaryCore.config().cloud_name
      }/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )
    const data = await response.json()
    const imageUrl = `https://res.cloudinary.com/${
      cloudinaryCore.config().cloud_name
    }/image/upload/w_${width},h_${height},c_fit/${data.public_id}`
    return imageUrl
  } catch (error) {
    console.error(error)
    return null
  }
}
