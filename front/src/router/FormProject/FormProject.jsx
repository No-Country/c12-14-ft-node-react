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
              className={` grid place-items-center w-7 h-7 ${
                view === 1 ? 'bg-purple-700' : 'bg-gray-600'
              } text-white rounded-full font-bold`}
            >
              1
            </span>
            <p
              className={`${
                view === 1 ? ' text-black' : 'text-gray-500'
              } font-bold`}
            >
              Ingresa la información de tu proyecto
            </p>
          </div>
          <MdOutlineArrowForwardIos />
          <div className='flex gap-1'>
            <span
              className={`grid place-items-center w-7 h-7 ${
                view === 2 ? 'bg-purple-700' : 'bg-gray-400'
              }  text-white rounded-full font-bold`}
            >
              2
            </span>
            <p
              className={`${
                view === 2 ? ' text-black' : 'text-gray-500'
              } font-bold`}
            >
              Revisa la información que ingresaste
            </p>
          </div>
          <MdOutlineArrowForwardIos />
        </div>

        {view === 1 ? (
          <PostProject
            form={form}
            setForm={setForm}
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
