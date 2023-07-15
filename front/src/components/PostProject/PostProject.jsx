import { IoAddSharp } from 'react-icons/io5'
import validateProject from '@/libs/validationProject'
import { useState } from 'react'

function PostProject({
  form,
  setForm,
  tecnology,
  setTecnology,
  rol,
  setRol,
  link,
  setLink,
  errors,
  setErrors,
  setView,
}) {
  // * states

  const [writing, setWriting] = useState(false)

  // * handlers

  const handleInput = (e) => {
    if (!writing) {
      setWriting(true)
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    validateProject(
      {
        ...form,
        [e.target.name]: e.target.value,
      },
      errors,
      setErrors
    )
  }

  const handleInputTechnologies = (e) => {
    if (!writing) {
      setWriting(true)
    }
    setTecnology({
      ...tecnology,
      name: e.target.value,
    })
  }

  const addTechnologies = (e) => {
    e.preventDefault()
    if (tecnology === '') return
    setForm({
      ...form,
      technologies: [...form.technologies, tecnology],
    })

    validateProject(
      {
        ...form,
        technologies: [...form.technologies, tecnology],
      },
      errors,
      setErrors
    )

    setTecnology({
      id: crypto.randomUUID(),
      name: '',
    })
  }

  const handleDeleteTecnology = (e) => {
    const id = e.target.id
    const newTechnologies = form.technologies.filter((tecnology) => {
      return tecnology.id !== id
    })

    validateProject(
      {
        ...form,
        technologies: newTechnologies,
      },
      errors,
      setErrors
    )

    setForm({
      ...form,
      technologies: newTechnologies,
    })
  }

  const handleInputRols = (e) => {
    if (!writing) {
      setWriting(true)
    }
    setRol({
      ...rol,
      [e.target.name]: e.target.value,
    })
  }

  const addRols = (e) => {
    e.preventDefault()
    if (rol === '') return
    setForm({
      ...form,
      rols: [...form.rols, rol],
    })

    validateProject(
      {
        ...form,
        rols: [...form.rols, rol],
      },
      errors,
      setErrors
    )

    setRol({
      id: crypto.randomUUID(),
      name: '',
      senority: '',
      number: '',
    })
  }

  const handleDeleteRol = (e) => {
    const id = e.target.id
    const newRols = form.rols.filter((rol) => {
      return rol.id !== id
    })

    validateProject(
      {
        ...form,
        rols: newRols,
      },
      errors,
      setErrors
    )

    setForm({
      ...form,
      rols: newRols,
    })
  }

  const handleInputLinks = (e) => {
    if (!writing) {
      setWriting(true)
    }
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    })
  }

  const addLinks = (e) => {
    e.preventDefault()
    if (link === '') return
    setForm({
      ...form,
      links: [...form.links, link],
    })

    validateProject(
      {
        ...form,
        links: [...form.links, link],
      },
      errors,
      setErrors
    )

    setLink({
      id: crypto.randomUUID(),
      name: '',
      url: '',
    })
  }

  const handleDeleteLink = (e) => {
    const id = e.target.id
    const newLinks = form.links.filter((link) => {
      return link.id !== id
    })

    validateProject(
      {
        ...form,
        links: newLinks,
      },
      errors,
      setErrors
    )

    setForm({
      ...form,
      links: newLinks,
    })
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (
      form.title.length !== 0 &&
      errors.title === '' &&
      errors.category === '' &&
      errors.description === '' &&
      errors.technologies === '' &&
      errors.rols === '' &&
      errors.links === ''
    ) {
      setView(2)
      console.log(form)
    }
  }

  // * -----------------------------//

  const classInput = (name) => {
    return `border-2 rounded-lg p-2 h-14 w-full ${
      writing &&
      (errors[`${name}`] !== ''
        ? ' border-red-500  focus-visible:outline-red-500'
        : 'border-green-500  focus-visible:outline-green-500')
    }`
  }

  return (
    <form className='flex flex-col gap-10 roun'>
      <div className=' border-2 rounded-lg p-5 flex flex-col gap-5  pt-10'>
        {/* // title */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Titulo de proyecto</label>
          <input
            className={classInput('title')}
            type='text'
            placeholder='Ej:  Seguros app'
            value={form.title}
            name='title'
            onChange={handleInput}
          />
          <span className='text-red-500'>{errors.title}</span>
        </div>

        {/* // category */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Categoria</label>
          <select
            className={classInput('category')}
            name='category'
            value={form.category}
            onChange={handleInput}
          >
            <option value=''>Selecciona una categoria</option>
            <option value='Web-Development'>Web Development</option>
            <option value='Data-Science'>Data Science</option>
            <option value='Telecommunications'>Telecommunications</option>
            <option value='Artificial-Intelligence'>
              Artificial Intelligence
            </option>
            <option value='Cybersecurity'>Cybersecurity</option>
            <option value='Internet-of-Things'>Internet of Things</option>
            <option value='Healthcare'>Healthcare</option>
            <option value='Finance'>Finance</option>
            <option value='Retail'>Retail</option>
            <option value='Transportation'>Transportation</option>
            <option value='Media-and-Entertainment'>
              Media and Entertainment
            </option>
            <option value='Education'>Education</option>
            <option value='Nonprofit-Foundation'>Nonprofit Foundation</option>
          </select>
          <span className='text-red-500'>{errors.category}</span>
        </div>

        {/* // description */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Descripción</label>
          <textarea
            className={classInput('description')}
            type='text'
            placeholder='Ej:  Seguros app'
            value={form.description}
            name='description'
            cols='10'
            onChange={handleInput}
          />
          <span className='text-red-500'>{errors.description}</span>
        </div>

        {/* // technologies */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Tecnologias requeridas</label>
          <div className='flex gap-2'>
            <input
              className={classInput('technologies')}
              type='text'
              placeholder='Ej: React'
              value={tecnology.name}
              name='technologies'
              onChange={handleInputTechnologies}
            />
            <button
              className=' bg-gray-500 text-white font-bold rounded-lg p-2 w-10 h-10 grid place-items-center'
              onClick={addTechnologies}
            >
              <IoAddSharp />
            </button>
          </div>
          <div className='flex gap-2  border-2 rounded-lg p-5'>
            {form.technologies.map((tecnology) => (
              <div
                key={tecnology.id}
                id={tecnology.id}
                className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
                onClick={handleDeleteTecnology}
              >
                {tecnology.name}
              </div>
            ))}
          </div>
          <span className='text-red-500'>{errors.technologies}</span>
        </div>

        {/* // rols */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Roles solicitados</label>
          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <input
                className={classInput('rols')}
                type='text'
                placeholder='Ej: Backend'
                value={rol.name}
                name='name'
                onChange={handleInputRols}
              />
              <input
                className={classInput('rols')}
                type='text'
                placeholder='Ej: Junior'
                value={rol.senority}
                name='senority'
                onChange={handleInputRols}
              />
              <input
                className={classInput('rols')}
                type='number'
                placeholder='Ej: 1'
                value={rol.number}
                name='number'
                onChange={handleInputRols}
              />
            </div>
            <button
              className=' bg-gray-500 text-white font-bold rounded-lg p-2 w-10 h-10 grid place-items-center'
              onClick={addRols}
            >
              <IoAddSharp />
            </button>
          </div>
          <div className='flex gap-2  border-2 rounded-lg p-5'>
            {form.rols.map((rol) => (
              <div
                key={rol.id}
                id={rol.id}
                className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
                onClick={handleDeleteRol}
              >
                {`${rol.name} | ${rol.senority} | ${rol.number}`}
              </div>
            ))}
          </div>
          <span className='text-red-500'>{errors.rols}</span>
        </div>

        {/* // links */}
        <div className='flex flex-col gap-2'>
          <label className=' font-bold'>Enlaces</label>
          <div className='flex gap-2'>
            <div className='flex gap-2'>
              <input
                className={classInput('links')}
                type='text'
                placeholder='Ej: Repositorio'
                value={link.name}
                name='name'
                onChange={handleInputLinks}
              />
              <input
                className={classInput('links')}
                type='text'
                placeholder='Ej: https://github.com/Jefersonsteven'
                value={link.url}
                name='url'
                onChange={handleInputLinks}
              />
            </div>
            <button
              className=' bg-gray-500 text-white font-bold rounded-lg p-2 w-10 h-10 grid place-items-center'
              onClick={addLinks}
            >
              <IoAddSharp />
            </button>
          </div>
          <div className='flex gap-2  border-2 rounded-lg p-5'>
            {form.links.map((link) => (
              <p
                key={link.id}
                id={link.id}
                className='bg-gray-200 text-gray-500 font-bold rounded-sm p-2'
                onClick={handleDeleteLink}
              >
                {link.name}
              </p>
            ))}
          </div>
          <span className='text-red-500'>{errors.links}</span>
        </div>
      </div>

      {/* button */}
      <div className='flex justify-end gap-5'>
        <button
          onClick={handleNext}
          className='bg-gray-500 text-white font-bold rounded p-2'
        >
          CONTINUAR
        </button>
      </div>
    </form>
  )
}

export default PostProject
