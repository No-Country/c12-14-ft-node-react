import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { uvaApi } from '../../../api'
import { setUser } from '../../../redux/slices/userSlice'

function ModalEditInfo() {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)
  const [form, setform] = useState({
    description: user.description,
  })

  const handleInput = (e) => {
    const value = e.target.value
    setform({
      description: value,
    })
  }

  const handleClick = () => {
    dispatch(closeModal('info'))
  }

  const handleSubmit = async () => {
    const data = await uvaApi.patch(`/users/${user._id}`, form)

    if (data.status === 200) {
      dispatch(
        setUser({
          ...user,
          description: data.data.user.description,
        })
      )
    }

    dispatch(closeModal('info'))
  }

  return (
    <div className='relative flex w-[558px] flex-col gap-8 rounded-2xl bg-white p-6'>
      <GrClose
        size={20}
        className='absolute right-0 top-0 m-6 cursor-pointer'
        onClick={handleClick}
      />
      <h2 className=' text-2xl font-bold text-primary'>Sobre mi</h2>
      <textarea
        className=' rounded-xl border-2 border-neutral-400 bg-gray-100 p-4 focus-visible:outline-primary'
        cols={20}
        rows={10}
        type='text'
        value={form.description}
        onChange={handleInput}
      />
      {/* // buttons */}
      <div className='flex justify-around'>
        <button
          onClick={handleClick}
          className=' grid cursor-pointer place-items-center py-2  font-bold text-primary'
        >
          volver
        </button>
        <button
          onClick={handleSubmit}
          className=' grid place-items-center rounded-lg bg-primary px-8 py-2 font-bold text-white'
        >
          Guardar cambios
        </button>
      </div>
    </div>
  )
}

export default ModalEditInfo
