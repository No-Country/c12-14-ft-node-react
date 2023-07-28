import validateProject from '@/libs/validationProject'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ReviewPostProject({ form, setForm, errors, setErrors, setView }) {
  const navigate = useNavigate()
  const [terms, setTerms] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const { user } = useSelector((state) => state.auth)

  const handleEditForm = () => {
    setView(1)
  }

  const handleSendForm = async (e) => {
    e.preventDefault()
    validateProject(form, errors, setErrors)
    const isValidate = Object.values(errors).every((error) => error === '')
    if (isValidate && terms) {
      const body = {
        title: form.title,
        category: form.category,
        description: form.description,
        technologies: form.technologies.map((technology) => {
          return technology.stackName
        }),
        requiredRoles: form.rols,
        connectionLinks: form.links,
        terms,
        notifications,
        languaje: 'es',
        status: 'buscando colaboradores',
        admins: [
          {
            userId: user._id,
            username: user.userName,
          },
        ],
      }

      const send = await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        body
      )

      if (send.status === 201) {
        navigate('/home')
      }
      return true
    }
  }

  return (
    <form className='flex flex-col gap-10'>
      <div className='container flex max-w-3xl flex-col gap-10'>
        {/* // title */}
        <div className='flex flex-col gap-2'>
          <h2 className=' font-bold  text-primary'>Titulo de proyecto</h2>
          <p>{form.title}</p>
        </div>

        {/* // category */}
        <div className='flex flex-col gap-2'>
          <h2 className=' font-bold  text-primary'>Categoria</h2>
          <p>{form.category}</p>
          <span className='text-red-500'>{errors.category}</span>
        </div>

        {/* // description */}
        <div className='flex flex-col gap-2'>
          <h2 className=' font-bold  text-primary'>Descripción</h2>
          <p>{form.description}</p>
        </div>

        {/* // technologies */}
        <div className='flex flex-col gap-2'>
          <h2 className=' font-bold  text-primary'>Tecnologias requeridas</h2>
          <div className='flex flex-wrap gap-2  rounded-lg border-2 border-[#6CB5FF] p-5'>
            {form.technologies.map((tecnology) => (
              <div
                key={tecnology.id}
                className='rounded-xl bg-[#6CB5FF] p-2 font-bold'
              >
                {tecnology.stackName}
              </div>
            ))}
          </div>
        </div>

        {/* // rols */}
        <div className='flex flex-col gap-2'>
          <label className='  font-bold  text-primary'>Roles solicitados</label>
          <div className='flex flex-wrap gap-2  rounded-lg border-2 border-[#BBA9E1] p-5'>
            {form.rols.map((rol) => (
              <div
                key={rol.id}
                className='rounded-xl bg-[#BBA9E1] p-2 font-bold'
              >
                {`${rol.name} | ${rol.senority} | ${rol.number}`}
              </div>
            ))}
          </div>
        </div>

        {/* // links */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold  text-primary'>Enlaces</label>
          <div className='flex gap-2  rounded-lg border-2 border-[#C1F2E3] p-5'>
            {form.links.map((link) => (
              <p
                key={link.id}
                className='rounded-xl bg-[#C1F2E3] p-2 font-bold'
              >
                {link.name}
              </p>
            ))}
            <span className='text-red-500'>{errors.links}</span>
          </div>
        </div>
      </div>
      {/* // términos y condiciones */}
      <div className='flex gap-3'>
        <input
          className=' h-6 w-6'
          type='checkbox'
          onChange={() => setTerms((prevTerms) => !prevTerms)}
        />
        <p>
          He leído y comprendido los{' '}
          <b>
            <a
              className='underline'
              href='/'
              target='_blank'
              rel='noopener noreferrer'
            >
              términos y condiciones.
            </a>
          </b>
        </p>
      </div>

      {/* // accept notifications */}
      <div className='flex gap-3'>
        <input
          className=' h-6 w-6'
          type='checkbox'
          onChange={() =>
            setNotifications((prevNotifications) => !prevNotifications)
          }
        />
        <p>
          Deseo recibir alertas cuando alguien aplique a una de las posiciones
          solicitadas.
        </p>
      </div>

      {/* button */}
      <div className='flex justify-between gap-5'>
        <button onClick={handleEditForm} className='btn-login'>
          EDITAR
        </button>
        <button onClick={handleSendForm} className='btn-register'>
          PUBLICAR
        </button>
      </div>
    </form>
  )
}

export default ReviewPostProject
