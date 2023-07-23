import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { closeModal } from '@/redux/slices/modalSlice'
import { uploadImage } from '@/libs/uploadImage'
import { uvaApi } from '../../../api/index'
import { setUser } from '../../../redux/slices/userSlice'

function ModalEditPhoto({ user }) {
  const dispatch = useDispatch()
  const [image, setImage] = useState({
    preview: null,
    upload: null,
  })

  const handleClick = () => {
    dispatch(closeModal('photo'))
  }

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    setImage({
      upload: file,
      preview: URL.createObjectURL(file),
    })
  }

  const saveChanges = async () => {
    if (image.upload) {
      try {
        const imageUrl = await uploadImage(image.upload, 500, 500)
        const req = await uvaApi.patch(`/users/${user._id}`, {
          photo: imageUrl,
        })
        const userData = {
          ...user,
          photo: req.data.user.photo,
        }
        dispatch(setUser(userData))
        dispatch(closeModal('photo'))
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return (
    <div className=' relative flex h-[316px] w-[560px] flex-col gap-8 rounded-3xl bg-white p-5'>
      <GrClose
        size={20}
        className='absolute right-0 top-0 m-6 cursor-pointer'
        onClick={handleClick}
      />
      <h2 className=' text-2xl'>
        <b>Cambiar mi foto</b>
      </h2>
      <div className='flex justify-between'>
        <img
          src={image.preview || user.photo}
          alt='me'
          className=' h-40 w-40 rounded-full'
        />
        <div className='flex flex-col items-center justify-evenly gap-6'>
          <p className=' w-[66.80%] text-xs'>
            Recuerda agregar una una foto tuya real. <br />
            No se permiten logotipos, imágenes prediseñadas, fotos grupales e
            imágenes que puedan resultar ofensivas para otros usuarios.
          </p>
          <div className='relative flex w-full justify-around text-xs'>
            <div className=' grid cursor-pointer place-items-center py-2  font-bold text-primary'>
              <input
                type='file'
                accept='image/png, image/jpeg'
                onChange={handleUploadImage}
                className='absolute bottom-0 left-4 top-0 w-[35%] cursor-pointer opacity-0'
              />
              <button className=''>Cargar una foto nueva</button>
            </div>
            <button
              onClick={saveChanges}
              className=' grid place-items-center rounded-lg bg-primary px-8 py-2 font-bold text-white'
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEditPhoto
