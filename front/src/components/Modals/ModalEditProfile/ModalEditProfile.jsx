import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { uvaApi } from '../../../api/index'
import { setUser } from '../../../redux/slices/userSlice'
import { GrClose } from 'react-icons/gr'

function ModalEditProfile({ user }) {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    userName: user.userName,
    roles: user.roles,
    socialsMedia: user.socialsMedia,
  })

  const [rol, setRol] = useState({
    name: '',
  })
  const [rolAdd, setRolAdd] = useState(false)
  const [link, setLink] = useState({
    name: '',
    link: '',
  })
  const [linkAdd, setLinkAdd] = useState(false)

  const handleClick = () => {
    dispatch(closeModal('profile'))
  }

  const handleName = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      userName: value,
    })
  }

  const handleInputRols = (e) => {
    const value = e.target.value
    setRol({
      name: value,
    })
  }

  const addRols = (e) => {
    e.preventDefault()
    if (rol !== '') {
      setForm({
        ...form,
        roles: [
          ...form.roles,
          {
            id: crypto.randomUUID(),
            name: rol.name,
          },
        ],
      })
      setRol({
        name: '',
      })
    }
  }

  const handleDeleteRol = (e) => {
    const id = e.target.id
    // TODO: cambiar name a id
    const newRols = form.roles.filter((rol) => rol.name !== id)
    setForm({
      ...form,
      roles: newRols,
    })
  }

  const handleInputLink = (e) => {
    const value = e.target.value
    const name = e.target.name
    setLink({
      ...link,
      [name]: value,
    })
  }

  const addLink = (e) => {
    e.preventDefault()
    if (link.name !== '' && link.link !== '') {
      setForm({
        ...form,
        socialsMedia: [
          ...form.socialsMedia,
          {
            id: crypto.randomUUID(),
            name: link.name,
            link: link.link,
          },
        ],
      })
      setLink({
        name: '',
        link: '',
      })
    }
  }

  const handleDeleteLink = (e) => {
    const id = e.target.id
    const newLinks = form.socialsMedia.filter((link) => link.id !== id)
    setForm({
      ...form,
      socialsMedia: newLinks,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const req = await uvaApi.patch(`/users/${user._id}`, form)
    dispatch(
      setUser({
        ...user,
        userName: req.data.user.userName,
        roles: req.data.user.roles,
        socialsMedia: req.data.user.socialsMedia,
      })
    )
    dispatch(closeModal('profile'))
  }

  return (
    <div className='relative flex w-[558px] flex-col gap-8 rounded-2xl bg-white p-6'>
      <GrClose
        size={20}
        className='absolute right-0 top-0 m-6 cursor-pointer'
        onClick={handleClick}
      />
      <h2 className=' text-2xl font-bold text-primary'>
        Editar mi información
      </h2>
      <form action='' className=' flex flex-col gap-8'>
        {/* name */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='' className='font-bold text-gray-500'>
            Nombre
          </label>
          <div className='flex flex-col gap-1'>
            <input
              className='h-14 w-full rounded-lg border-2 p-2 focus-visible:outline-[#4285F4]'
              type='text'
              value={form.userName}
              onChange={handleName}
            />
            <span className=' pl-2 text-xs'>
              Tu nombre será publico y visible en la parte superior de tu perfil
            </span>
          </div>
        </div>

        {/* // roles */}
        <div className='flex flex-col gap-4'>
          <label className=' font-bold'>Mis Roles</label>

          <div className={`flex flex-wrap gap-2`}>
            {form.roles.map((rol) => (
              <div
                key={rol.name}
                id={rol.name}
                className='flex items-center gap-1 rounded-xl bg-[#29278d65] p-2 font-bold text-white'
              >
                <p>{rol.name}</p>
                <GrClose
                  size={15}
                  className='cursor-pointer'
                  id={rol.name}
                  onClick={handleDeleteRol}
                />
              </div>
            ))}

            <button
              className=' grid h-10 w-10 place-items-center rounded-lg bg-gray-500 p-2 font-bold text-white'
              onClick={(e) => {
                e.preventDefault()
                setRolAdd((prev) => !prev)
              }}
            >
              <IoAddSharp />
            </button>
          </div>

          {rolAdd && (
            <div className='flex gap-2'>
              <div className='flex gap-2'>
                <input
                  className={`h-14 w-full rounded-lg border-2 focus-visible:bg-white ${
                    rol.name === '' ? 'bg-[#DADADA]' : 'bg-white'
                  }  p-2 `}
                  type='text'
                  placeholder='Ej: Backend Developer'
                  value={rol.name}
                  name='name'
                  onChange={handleInputRols}
                />
              </div>
              <button
                className=' grid place-items-center border-none bg-transparent font-bold text-primary underline'
                onClick={addRols}
              >
                Agregar
              </button>
            </div>
          )}
        </div>

        {/* // socialsMedia */}
        <div className='flex flex-col gap-4'>
          <label className=' font-bold'>Mis redes sociales</label>

          <div className={`flex flex-wrap gap-2 `}>
            {form.socialsMedia.map((link) => (
              <div
                key={link.name}
                id={link.name}
                className='flex items-center gap-1 rounded-xl bg-[#29278d65] p-2 font-bold text-white'
              >
                <p>{link.name}</p>
                <GrClose
                  size={15}
                  className='cursor-pointer'
                  id={link.name}
                  onClick={handleDeleteLink}
                />
              </div>
            ))}
            <button
              className=' grid h-10 w-10 place-items-center rounded-lg bg-gray-500 p-2 font-bold text-white'
              onClick={(e) => {
                e.preventDefault()
                setLinkAdd((prev) => !prev)
              }}
            >
              <IoAddSharp />
            </button>
          </div>

          {linkAdd && (
            <div className='flex gap-2'>
              <div className='flex gap-2'>
                <input
                  className={`h-14 w-full rounded-lg border-2 focus-visible:bg-white  ${
                    link.name === '' ? 'bg-[#DADADA]' : 'bg-white'
                  }  p-2`}
                  type='text'
                  placeholder='Ej: Github'
                  value={link.name}
                  name='name'
                  onChange={handleInputLink}
                />
                <input
                  className={`h-14 w-full rounded-lg border-2 focus-visible:bg-white ${
                    link.link === '' ? 'bg-[#DADADA]' : 'bg-white '
                  }  p-2`}
                  type='text'
                  placeholder='Ej: https://github.com/username'
                  value={link.link}
                  name='link'
                  onChange={handleInputLink}
                />
              </div>
              <button
                className=' grid place-items-center border-none bg-transparent font-bold text-primary underline'
                onClick={addLink}
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

export default ModalEditProfile
