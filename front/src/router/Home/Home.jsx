import projectsViewCarousel from '@/assets/projectsViewCarousel.png'
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from 'react-icons/io'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'
import { BsCheckLg } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='flex w-full items-center justify-center bg-secondaryBackground'>
      <div>
        <div className='relative mt-28 h-60 w-[1150px] rounded-2xl bg-gradient-to-r from-[#316BE7] to-[#6c9afd]'>
          {/* text */}
          <div className='flex flex-col gap-6 py-5 pl-12'>
            <p className='text-2xl font-semibold text-white'>
              Aumenta la eficiencia y potencia la creatividad de tu equipo.
            </p>
            <p className='w-2/3 text-xl text-white'>
              Simplifica tareas tediosas y obtén resultados sorprendentes con
              nuestra IA personalizada para diseñar interfaces.
            </p>
            <button className='w-36 rounded-xl bg-white px-6 py-2 text-lg font-bold text-primary'>
              Leer más
            </button>
          </div>

          {/* navigation */}
          <div className='absolute -left-6 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-4xl text-primaryDark'>
            <IoIosArrowBack />
          </div>
          <div className='absolute -right-6 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-white p-2 text-4xl text-primaryDark'>
            <IoIosArrowForward />
          </div>

          {/* pagination */}
          <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4'>
            <div className='h-3 w-3 cursor-pointer rounded-full bg-white' />
            <div className='h-3 w-3 cursor-pointer rounded-full bg-gray-400' />
          </div>

          {/* bg image */}
          <img
            src={projectsViewCarousel}
            alt='projectsViewCarousel'
            className='absolute right-20 top-0 h-full w-[320px] object-cover object-right'
            draggable={false}
          />
        </div>

        {/* sort */}
        <div className='mt-14 flex w-[1150px] flex-col items-center justify-center'>
          <div className='rounded-lg bg-primary pl-4 text-white'>
            Filtrar por:
            <select
              name='sort'
              className='h-12 w-32 rounded-lg border-none bg-primary pl-2 font-semibold text-white outline-none'
            >
              <option value=''>Nuevo</option>
              <option value=''>Más reciente</option>
              <option value=''>Más antiguo</option>
            </select>
          </div>

          <div className='mt-3 flex gap-4'>
            <div className='mb-20 flex flex-col gap-4'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

            {/* advanced search */}
            <div className='h-full w-[470px] overflow-hidden rounded-lg border border-secondaryContainerBorder'>
              <div className='flex flex-col bg-white px-8'>
                <p className='py-10 font-extrabold text-primaryDark'>
                  Busqueda avanzada
                </p>
                <p className='pb-8 text-sm font-medium text-secondaryText'>
                  Obtén resultados más precisos con la búsqueda avanzada, te
                  facilitamos la tarea de encontrar información relevante acerca
                  de los proyectos que más te interesan.
                </p>
              </div>
              <div className='border-y-2 border-primary border-opacity-10 bg-white p-8'>
                <p className='font-extrabold text-primaryDark'>Tecnologías</p>
                {/* search bar */}
                <div className='relative mb-16 mt-12 flex w-full justify-center rounded-full border-2 border-primary border-opacity-60'>
                  <input
                    className=' h-10 w-full bg-transparent px-10 pr-16 text-sm font-medium italic placeholder-primaryDark placeholder-opacity-50 outline-none'
                    type='text'
                    placeholder='Buscar tecnologías'
                  />
                  <div className='absolute right-0 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-r-full bg-primary p-2 px-6 text-2xl text-white'>
                    <IoIosSearch />
                  </div>
                </div>
              </div>

              {/* categories */}
              <div className='flex flex-col gap-6 border-primary border-opacity-10 bg-white p-8 pb-12'>
                <p className='font-extrabold text-primaryDark'>Categorías</p>
                <div className='flex items-center gap-4'>
                  <input
                    className='peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-500 border-opacity-40 bg-gray-300 checked:border-primaryDark'
                    id='checkbox1'
                    type='checkbox'
                  />
                  <label htmlFor='checkbox1' className='cursor-pointer'>
                    Desarrollo Web
                  </label>
                  <BsCheckLg className='pointer-events-none absolute hidden text-primaryDark peer-checked:block' />
                </div>
                <div className='flex items-center gap-4'>
                  <input
                    className='peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-500 border-opacity-40 bg-gray-300 checked:border-primaryDark'
                    id='checkbox2'
                    type='checkbox'
                  />
                  <label htmlFor='checkbox2' className='cursor-pointer'>
                    Ciencia de datos
                  </label>
                  <BsCheckLg className='pointer-events-none absolute hidden text-primaryDark peer-checked:block' />
                </div>
                <div className='flex items-center gap-4'>
                  <input
                    className='peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-500 border-opacity-40 bg-gray-300 checked:border-primaryDark'
                    id='checkbox3'
                    type='checkbox'
                  />
                  <label htmlFor='checkbox3' className='cursor-pointer'>
                    Telecomunicaciones
                  </label>
                  <BsCheckLg className='pointer-events-none absolute hidden text-primaryDark peer-checked:block' />
                </div>
              </div>
            </div>
          </div>

          {/* bottom pagination and navigation */}
          <div className='mb-20 mt-10 flex items-center justify-center gap-2 self-start text-white'>
            <div className='flex cursor-pointer items-center justify-center text-4xl'>
              <IoIosArrowBack className='text-primaryDark text-opacity-50' />
            </div>

            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark'>
              1
            </div>
            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark bg-opacity-50'>
              2
            </div>
            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark bg-opacity-50'>
              3
            </div>
            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark bg-opacity-50'>
              4
            </div>
            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark bg-opacity-50'>
              5
            </div>
            <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primaryDark bg-opacity-50'>
              6
            </div>

            <div className='flex cursor-pointer items-center justify-center text-4xl'>
              <IoIosArrowForward className='text-primaryDark' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
