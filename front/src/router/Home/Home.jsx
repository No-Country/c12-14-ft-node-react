import projectsViewCarousel from '@/assets/projectsViewCarousel.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'
import { BsCheckLg } from 'react-icons/bs'
import { handleFilters } from '@/libs/filtersFunctions'
import { useFiltersEffects } from '@/libs/useFiltersEffects'
import { useEffect, useState } from 'react'
import { uvaApi } from '@/api'

const dataStacks = async () => {
  const { data } = await uvaApi.get('/stacks')
  return data.stack
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    categories: [],
    technologies: [],
  })

  const [categories, setCategories] = useState([])
  const [showMorecategories, setShowMorecategories] = useState(false)
  const [projects, setProjects] = useState([])
  const bgImages = [projectsViewCarousel, projectsViewCarousel]
  const [bannerNavigation, setBannerNavigation] = useState({
    currentPage: 1,
    totalPages: bgImages.length,
  })
  const [stack, setStack] = useState([])
  const [search, setSearch] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    dataStacks().then((data) => {
      setStack(data)
    })
  }, [])

  const handleSearch = (e) => {
    const search = e.target.value
    setSearch(search)
    if (search !== '') {
      const result = stack.filter((tag) => {
        return (
          tag.stackName.toLowerCase().includes(search.toLowerCase()) &&
          !filters.technologies.some((tech) => tech.stackName === tag.stackName)
        )
      })
      setResult(result)
    } else {
      setResult('')
    }
  }

  const handleSelect = (e) => {
    const id = e.target.id
    const stackName = e.target.innerText
    setFilters({
      ...filters,
      technologies: [...filters.technologies, { id, stackName }],
    })
    setResult('')
    setSearch('')
  }

  useFiltersEffects(
    filters,
    setCategories,
    currentPage,
    setCurrentPage,
    setProjects
  )
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
          <div
            className='absolute -left-6 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-secondaryBackground p-2 text-4xl text-primaryDark'
            onClick={() =>
              bannerNavigation.currentPage > 1 &&
              setBannerNavigation({
                ...bannerNavigation,
                currentPage: bannerNavigation.currentPage - 1,
              })
            }
          >
            {bannerNavigation.currentPage === 1 ? (
              <IoIosArrowBack className='opacity-50' />
            ) : (
              <IoIosArrowBack />
            )}
          </div>

          <div
            className='absolute -right-6 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-secondaryBackground p-2 text-4xl text-primaryDark'
            onClick={() =>
              bannerNavigation.currentPage < bannerNavigation.totalPages &&
              setBannerNavigation({
                ...bannerNavigation,
                currentPage: bannerNavigation.currentPage + 1,
              })
            }
          >
            {bannerNavigation.currentPage === bannerNavigation.totalPages ? (
              <IoIosArrowForward className='opacity-50' />
            ) : (
              <IoIosArrowForward />
            )}
          </div>

          {/* pagination */}
          <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4'>
            {Array.from(Array(bgImages.length), (_, i) => i + 1).map((page) => (
              <div
                className={`h-3 w-3 cursor-pointer rounded-full ${
                  bannerNavigation.currentPage === page
                    ? 'bg-white'
                    : 'bg-gray-400'
                }`}
                key={page}
                onClick={() =>
                  setBannerNavigation({
                    ...bannerNavigation,
                    currentPage: page,
                  })
                }
              />
            ))}
          </div>

          {/* bg image */}
          <img
            src={bgImages[bannerNavigation.currentPage - 1]}
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
              {projects?.documentsCurrentPage?.length > 0 ? (
                projects?.documentsCurrentPage?.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))
              ) : (
                <div className='mb-20 flex flex-col gap-4'>
                  <div className='font-sans relative ml-1 flex h-screen w-[680px] items-center justify-center rounded-lg border border-secondaryContainerBorder bg-white text-primaryDark'>
                    <div className='flex items-center justify-between px-8 pb-4 pt-6 text-xl'>
                      <h4 className='cursor-pointer font-bold capitalize'>
                        No se encontraron proyectos
                      </h4>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* advanced search */}
            <div className='h-full w-[470px] overflow-hidden rounded-lg border border-secondaryContainerBorder'>
              <div className='flex flex-col bg-white px-8'>
                <p className='py-10 text-lg font-extrabold text-primaryDark'>
                  Busqueda avanzada
                </p>
                <p className='pb-8 text-sm font-medium text-secondaryText'>
                  Obtén resultados más precisos con la búsqueda avanzada, te
                  facilitamos la tarea de encontrar información relevante acerca
                  de los proyectos que más te interesan.
                </p>
              </div>
              <div className='border-y-2 border-primary border-opacity-10 bg-white p-8'>
                <p className='text-lg font-extrabold text-primaryDark'>
                  Tecnologías
                </p>
                {/* search bar */}
                <div className='relative z-10'>
                  <input
                    className={`border-2 border-primary border-opacity-50 focus-visible:outline-0 ${
                      result !== '' ? ' rounded-t-lg' : 'rounded-lg'
                    } h-14 w-full p-8 `}
                    type='search'
                    placeholder='Ej: react.js'
                    onChange={handleSearch}
                    value={search}
                  />

                  <div
                    className={
                      result !== ''
                        ? 'top-17 absolute w-full rounded-b-md border-2 border-t-0 border-primary border-opacity-50 bg-secondaryBackground p-4'
                        : ''
                    }
                  >
                    <div className='no-scrollbar flex max-h-60 flex-wrap items-center justify-center gap-2 overflow-auto text-white'>
                      {result !== '' &&
                        result.length > 0 &&
                        result.map((tag) => {
                          return (
                            <div
                              key={tag._id}
                              className='flex cursor-pointer items-center gap-2 rounded-full bg-primary bg-opacity-70 px-4 py-1 text-white'
                              onClick={handleSelect}
                              id={tag._id}
                              name={tag.stackName}
                            >
                              {tag.stackName}
                            </div>
                          )
                        })}
                      {result !== '' && result.length === 0 && (
                        <p className='text-black'>No hay resultados</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* selected tags */}
                <div className='mt-4 flex flex-wrap gap-2'>
                  {filters.technologies.map((technology) => (
                    <div
                      key={technology.id}
                      className='flex cursor-pointer items-center gap-2 rounded-full bg-primary bg-opacity-70 px-4 py-1 text-white'
                      onClick={() =>
                        setFilters({
                          ...filters,
                          technologies: filters.technologies.filter(
                            (tech) => tech.id !== technology.id
                          ),
                        })
                      }
                    >
                      {technology.stackName}
                    </div>
                  ))}
                </div>
              </div>

              {/* categories */}
              <div className='flex flex-col gap-4 border-primary border-opacity-10 bg-white p-8 pb-12'>
                <p className='text-lg font-extrabold text-primaryDark'>
                  Categorías
                </p>
                {/* show first 5 categories */}
                {categories?.category?.slice(0, 5).map((category) => (
                  <div className='flex items-center gap-2' key={category._id}>
                    <input
                      className='peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-500 border-opacity-40 bg-gray-300 checked:border-primaryDark'
                      id={category.categoryName}
                      type='checkbox'
                      name='categories'
                      onChange={(e) => handleFilters(e, filters, setFilters)}
                    />
                    <label
                      htmlFor={category.categoryName}
                      className='cursor-pointer capitalize'
                    >
                      {category.categoryName}
                    </label>
                    <BsCheckLg className='pointer-events-none absolute hidden text-primaryDark peer-checked:block' />
                  </div>
                ))}
                {/* show more categories */}
                {showMorecategories &&
                  categories?.category?.slice(5).map((category) => (
                    <div className='flex items-center gap-4' key={category._id}>
                      <input
                        className='peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-500 border-opacity-40 bg-gray-300 checked:border-primaryDark'
                        id={category.categoryName}
                        type='checkbox'
                        name='categories'
                        onChange={handleFilters}
                      />
                      <label
                        htmlFor={category.categoryName}
                        className='cursor-pointer capitalize'
                      >
                        {category.categoryName}
                      </label>
                      <BsCheckLg className='pointer-events-none absolute hidden text-primaryDark peer-checked:block' />
                    </div>
                  ))}
                {/* show more categories button */}
                <div
                  className='cursor-pointer font-semibold text-primaryDark'
                  onClick={() => setShowMorecategories(!showMorecategories)}
                >
                  {showMorecategories ? 'Mostrar menos' : 'Mostrar más'}
                </div>
              </div>
            </div>
          </div>

          {/* bottom pagination and navigation */}
          <div className='mb-20 flex items-center justify-center gap-2 self-start text-white'>
            <div
              className='flex items-center justify-center text-4xl'
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              {currentPage === 1 ? (
                <IoIosArrowBack
                  className={`cursor-pointer text-primaryDark
                ${projects?.totalPages === 0 && 'hidden'}
              `}
                />
              ) : (
                <IoIosArrowBack className='cursor-pointer text-primaryDark' />
              )}
            </div>

            {
              // pagination
              Array.from(Array(projects?.totalPages), (_, i) => i + 1).map(
                (page) => (
                  <div
                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
                      currentPage === page
                        ? 'bg-primaryDark'
                        : 'bg-primaryDark bg-opacity-50'
                    }`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </div>
                )
              )
            }

            <div
              className='flex items-center justify-center text-4xl'
              onClick={() =>
                currentPage < projects?.totalPages &&
                setCurrentPage(currentPage + 1)
              }
            >
              {currentPage === projects?.totalPages ? (
                <IoIosArrowForward className='text-primaryDark text-opacity-50' />
              ) : (
                <IoIosArrowForward
                  className={`cursor-pointer text-primaryDark
                    ${projects?.totalPages === 0 && 'hidden'}
                  `}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
