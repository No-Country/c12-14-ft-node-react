import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'
import PostProject from '../../components/PostProject/PostProject'
import ReviewPostProject from '../../components/PostProject/ReviewPostProject'

function FormProject() {
  // * states

  const [view, setView] = useState(1)

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    technologies: [],
    rols: [],
    links: [],
  })

  const [tecnology, setTecnology] = useState({
    id: crypto.randomUUID(),
    name: '',
  })

  const [rol, setRol] = useState({
    id: crypto.randomUUID(),
    name: '',
    senority: '',
    number: '',
  })

  const [link, setLink] = useState({
    id: crypto.randomUUID(),
    name: '',
    url: '',
  })

  const [errors, setErrors] = useState({
    title: '',
    category: '',
    description: '',
    technologies: '',
    rols: '',
    links: '',
  })

  // * -----------------------------//

  return (
    <main className='flex gap-20 py-20 w-full justify-center'>
      <section className=' w-1/3 m-1 bg-gray-500'>
        <div className=''>
          <img src='' alt='' />
        </div>
      </section>

      <section className='flex flex-col gap-20'>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-1'>
            <span
              className={
                ' grid place-items-center w-7 h-7 bg-gray-400 text-gray-500 rounded-full font-bold'
              }
            >
              1
            </span>
            <p>Ingresa la información de tu proyecto</p>
          </div>
          <MdOutlineArrowForwardIos />
          <div className='flex gap-1'>
            <span
              className={
                ' grid place-items-center w-7 h-7 bg-gray-400 text-gray-500 rounded-full font-bold'
              }
            >
              2
            </span>
            <p>Revisa la información que ingresaste</p>
          </div>
          <MdOutlineArrowForwardIos />
        </div>

        {view === 1 ? (
          <PostProject
            form={form}
            setForm={setForm}
            tecnology={tecnology}
            setTecnology={setTecnology}
            rol={rol}
            setRol={setRol}
            link={link}
            setLink={setLink}
            errors={errors}
            setErrors={setErrors}
            setView={setView}
          />
        ) : (
          <ReviewPostProject
            form={form}
            errors={errors}
            setView={setView}
            setErrors={setErrors}
          />
        )}
      </section>
    </main>
  )
}

export default FormProject
