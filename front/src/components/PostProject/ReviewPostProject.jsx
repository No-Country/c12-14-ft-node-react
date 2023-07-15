import validateProject from '@/libs/validationProject'
import { useState } from 'react'

function ReviewPostProject({ form, errors, setErrors, setView }) {
  const [terms, setTerms] = useState(false)
  const [notifications, setNotifications] = useState(false)

  const handleEditForm = () => {
    setView(1)
  }

  const handleSendForm = (e) => {
    e.preventDefault()
    validateProject(form, errors, setErrors)
    const isValidate = Object.values(errors).every((error) => error === '')
    if (isValidate && terms) {
      const body = {
        title: form.title,
        category: form.category,
        description: form.description,
        technologies: form.technologies,
        requiredRols: form.rols,
        connectionLinks: form.links,
        terms,
        notifications,
        languaje: 'es',
        status: 'buscando colaboradores',
        admins: ['idAdmin1'],
      }

      console.log('enviar formulario', body)
    }
  }

  return (
    <form className='flex flex-col gap-10 roun'>
      {/* // title */}
      <div className='flex flex-col gap-2'>
        <h2 className=' font-bold'>Titulo de proyecto</h2>
        <p>{form.title}</p>
      </div>

      {/* // category */}
      <div className='flex flex-col gap-2'>
        <h2 className=' font-bold'>Categoria</h2>
        <p>{form.category}</p>
        <span className='text-red-500'>{errors.category}</span>
      </div>

      {/* // description */}
      <div className='flex flex-col gap-2'>
        <h2 className=' font-bold'>Descripción</h2>
        <p>{form.description}</p>
      </div>

      {/* // technologies */}
      <div className='flex flex-col gap-2'>
        <h2 className=' font-bold'>Tecnologias requeridas</h2>
        <div className='flex gap-2  border-2 rounded-lg p-5'>
          {form.technologies.map((tecnology) => (
            <div
              key={tecnology.id}
              className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
            >
              {tecnology.stackName}
            </div>
          ))}
        </div>
      </div>

      {/* // rols */}
      <div className='flex flex-col gap-2'>
        <label className=' font-bold'>Roles solicitados</label>
        <div className='flex gap-2  border-2 rounded-lg p-5'>
          {form.rols.map((rol) => (
            <div
              key={rol.id}
              className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
            >
              {`${rol.name} | ${rol.senority} | ${rol.number}`}
            </div>
          ))}
        </div>
      </div>

      {/* // links */}
      <div className='flex flex-col gap-2'>
        <label className=' font-bold'>Enlaces</label>
        <div className='flex gap-2  border-2 rounded-lg p-5'>
          {form.links.map((link) => (
            <p
              key={link.id}
              className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
            >
              {link.name}
            </p>
          ))}
          <span className='text-red-500'>{errors.links}</span>
        </div>
      </div>

      {/* // términos y condiciones */}
      <div className='flex gap-3'>
        <input
          type='checkbox'
          onChange={() => setTerms((prevTerms) => !prevTerms)}
        />
        <p>
          He leído y comprendido los{' '}
          <b>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              términos y condiciones.
            </a>
          </b>
        </p>
      </div>

      {/* // accept notifications */}
      <div className='flex gap-3'>
        <input
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
        <button
          onClick={handleEditForm}
          className='bg-gray-500 text-white font-bold rounded p-2'
        >
          EDITAR
        </button>
        <button
          onClick={handleSendForm}
          className='bg-gray-500 text-white font-bold rounded p-2'
        >
          PUBLICAR
        </button>
      </div>
    </form>
  )
}

export default ReviewPostProject
