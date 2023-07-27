import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'
import PostProject from '../../components/PostProject/PostProject'
import ReviewPostProject from '../../components/PostProject/ReviewPostProject'
import { BsCheck2 } from 'react-icons/bs'

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
    <main className='flex w-full justify-center gap-20 py-20'>
      <section className=' m-1 w-1/3 pt-40'>
        <div className=''>
          {view === 1 ? (
            <img src='src/assets/teamremote.png' alt='equipo remoto' />
          ) : (
            <img src='src/assets/salesteam.png' alt='equipo remoto' />
          )}
        </div>
      </section>

      <section className='flex flex-col gap-20'>
        <div className='flex items-center justify-around'>
          <div className='flex gap-5'>
            <span
              className={` grid h-7 w-7 place-items-center ${
                view === 1 ? 'bg-primary' : 'bg-[#1D8841]'
              } rounded-full font-bold text-white`}
            >
              {view === 1 ? '1' : <BsCheck2 size={20} />}
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
          <div className='flex gap-5'>
            <span
              className={`grid h-7 w-7 place-items-center ${
                view === 2 ? 'bg-primary' : 'bg-gray-400'
              }  rounded-full font-bold text-white`}
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
            setForm={setForm}
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
