import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { uvaApi } from '../../../api/index'
import { setUser } from '../../../redux/slices/userSlice'
import { GrClose } from 'react-icons/gr'

function ModalEditStack({ user }) {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    stack: user.stack,
  })

  const [technology, setTechnology] = useState({
    name: '',
  })
  const [technologyAdd, setTechnologyAdd] = useState(false)

  const handleClick = () => {
    dispatch(closeModal('stack'))
  }

  const handleInputTechnology = (e) => {
    const value = e.target.value
    setTechnology({
      name: value,
    })
  }

  const addTechnology = (e) => {
    e.preventDefault()
    if (technology !== '') {
      setForm({
        stack: [
          ...form.stack,
          {
            id: crypto.randomUUID(),
            name: technology.name,
          },
        ],
      })
      setTechnology({
        name: '',
      })
    }
  }

  const handleDeleteTechnology = (e) => {
    const id = e.target.id
    const newTechnologies = form.stack.filter((rol) => rol.id !== id)
    setForm({
      ...form,
      stack: newTechnologies,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const req = await uvaApi.patch(`/users/${user._id}`, form)
    dispatch(
      setUser({
        ...user,
        stack: req.data.user.stack,
      })
    )
    dispatch(closeModal('stack'))
  }

  return (
    <div className='relative flex w-[558px] flex-col gap-8 rounded-2xl bg-white p-6'>
      <GrClose
        size={20}
        className='absolute right-0 top-0 m-6 cursor-pointer'
        onClick={handleClick}
      />
      <h1 className=' text-2xl font-bold text-primary'>Editar mi Stack</h1>
      <form action='' className=' flex flex-col gap-8'>
        {/* // stack */}
        <div className='flex flex-col gap-4'>
          <label className=' font-bold'>Mis Roles</label>

          <div className={`flex flex-wrap gap-2`}>
            {form.stack.map((technology) => (
              <div
                key={technology.id}
                id={technology.id}
                className='flex items-center gap-1 rounded-xl bg-[#29278d65] bg-gray-200 p-2 font-bold text-white'
              >
                <p>{technology.name}</p>
                <GrClose
                  size={15}
                  className='cursor-pointer'
                  id={technology.id}
                  onClick={handleDeleteTechnology}
                />
              </div>
            ))}

            <button
              className=' grid h-10 w-10 place-items-center rounded-lg bg-gray-500 p-2 font-bold text-white'
              onClick={(e) => {
                e.preventDefault()
                setTechnologyAdd((prev) => !prev)
              }}
            >
              <IoAddSharp />
            </button>
          </div>

          {technologyAdd && (
            <div className='flex gap-2'>
              <div className='flex gap-2'>
                <input
                  className={`h-14 w-full rounded-lg border-2 focus-visible:bg-white ${
                    technology.name === '' ? 'bg-[#DADADA]' : 'bg-white'
                  }  p-2 `}
                  type='text'
                  placeholder='Ej: JavaScript'
                  value={technology.name}
                  name='name'
                  onChange={handleInputTechnology}
                />
              </div>
              <button
                className=' grid place-items-center border-none bg-transparent font-bold text-primary underline'
                onClick={addTechnology}
              >
                Agregar
              </button>
            </div>
          )}
        </div>

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
      </form>
    </div>
  )
}

export default ModalEditStack
