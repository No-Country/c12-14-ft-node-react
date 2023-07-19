import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlice'
import { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { uvaApi } from '../../../api/index'
import { setUser } from '../../../redux/slices/userSlice'

function ModalEditProfile() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [form, setForm] = useState({
    userName: user.userName,
    roles: user.roles,
    socialsMedia: user.socialsMedia,
  })

  const [rol, setRol] = useState('')
  const [link, setLink] = useState({
    name: '',
    link: '',
  })

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
    setRol(value)
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
            name: rol,
          },
        ],
      })
      setRol('')
    }
  }

  const handleDeleteRol = (e) => {
    const id = e.target.id
    const newRols = form.roles.filter((rol) => rol.id !== id)
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
    console.log(e.target.id)
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
    <div>
      <button onClick={handleClick}>x</button>
      <h1>Editar mi información</h1>
      <form action=''>
        {/* name */}
        <div>
          <label htmlFor=''>Nombre</label>
          <input type='text' value={form.userName} onChange={handleName} />
          <span>
            Tu nombre será publico y visible en la parte superior de tu perfil
          </span>
        </div>

        {/* // roles */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Mis Roles</label>

          <div className={`flex gap-2  rounded-lg border-2 p-5 `}>
            {form.roles.map((rol) => (
              <div
                key={rol.name}
                id={rol.name}
                className='rounded-sm bg-gray-200 p-2 font-bold text-gray-500'
                onClick={handleDeleteRol}
              >
                {rol.name}
              </div>
            ))}
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <input
                className='h-14 w-full rounded-lg border-2 p-2 '
                type='text'
                placeholder='Ej: Backend Developer'
                value={rol.name}
                name='name'
                onChange={handleInputRols}
              />
            </div>
            <button
              className=' grid h-10 w-10 place-items-center rounded-lg bg-gray-500 p-2 font-bold text-white'
              onClick={addRols}
            >
              <IoAddSharp />
            </button>
          </div>
        </div>

        {/* // socialsMedia */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Mis redes sociales</label>

          <div className={`flex gap-2  rounded-lg border-2 p-5 `}>
            {form.socialsMedia.map((link) => (
              <div
                key={link.name}
                id={link.name}
                className='rounded-sm bg-gray-200 p-2 font-bold text-gray-500'
                onClick={handleDeleteLink}
              >
                {link.name}
              </div>
            ))}
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <input
                className='h-14 w-full rounded-lg border-2 p-2 '
                type='text'
                placeholder='Ej: Github'
                value={link.name}
                name='name'
                onChange={handleInputLink}
              />
              <input
                className='h-14 w-full rounded-lg border-2 p-2 '
                type='text'
                placeholder='Ej: https://github.com/username'
                value={link.link}
                name='link'
                onChange={handleInputLink}
              />
            </div>
            <button
              className=' grid h-10 w-10 place-items-center rounded-lg bg-gray-500 p-2 font-bold text-white'
              onClick={addLink}
            >
              <IoAddSharp />
            </button>
          </div>
        </div>

        {/* // skills */}
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default ModalEditProfile
