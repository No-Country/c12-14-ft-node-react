import { useState } from 'react'
// import SearchBar from '../../components/SearchBar/SearchBar'
import CardMiniProject from '../../components/CardMiniProject/CardMiniProject'

const Landing = () => {
  const [howto, setHowto] = useState('post')

  // * projects
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 1,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 2,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 3,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 4,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
    {
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 5,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
    {
      title: 'Project 6',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      id: 6,
      status: 'open',
      category: 'Eccomerce',
      image: './',
    },
  ]

  // * categories
  const categories = [
    {
      name: 'Desarrollo web',
      id: 1,
    },
    {
      name: 'Ciencia de datos',
      id: 2,
    },
    {
      name: 'Telecomunicaciones',
      id: 3,
    },
    {
      name: 'Inteligencia artificial',
      id: 4,
    },
    {
      name: 'Ciberseguridad ',
      id: 5,
    },
    {
      name: 'Salud y bienestar',
      id: 6,
    },
    {
      name: 'Sin fines de lucro',
      id: 7,
    },
    {
      name: 'Internet de las cosas',
      id: 8,
    },
    {
      name: 'Finanzas',
      id: 9,
    },
    {
      name: 'Comercio',
      id: 10,
    },
    {
      name: 'Transporte',
      id: 11,
    },
    {
      name: 'Entretenimiento',
      id: 12,
    },
    {
      name: 'Educación',
      id: 13,
    },
  ]

  const ImageCalltoAction = () => {
    return (
      <div className=' w-[662px] h-[653px] relative'>
        <div className=' w-[662px] h-[653px] bg-[#E9DFFD] grid place-items-center font-black text-3xl rounded-full'>
          <h2>{'<Desarrollo Front-End>'}</h2>
        </div>
        <div className=' absolute top-0 grid grid-cols-2 grid-rows-2  w-[662px] h-[653px]'>
          <div className=' flex justify-start'>
            <div className=' w-[270px] h-[282px] bg-white rounded-full'>
              <img src='src/assets/desktop.png' alt='desktop' />
            </div>
          </div>
          <div className=' flex  justify-end  relative bottom-16'>
            <div className=' w-[243px] h-[243px] bg-white rounded-full'>
              <img
                src='src/assets/components.png'
                alt='components'
                className=' scale-110'
              />
            </div>
          </div>
          <div className=' flex justify-start items-end'>
            <div className=' w-[200px] h-[200px] bg-white rounded-full bottom-10 left-6 relative'>
              <img
                src='src/assets/laptop.png'
                alt='laptop'
                className=' scale-[1.2] bottom-8 left-4 relative'
              />
            </div>
          </div>
          <div className=' flex justify-end  items-end'>
            <div className=' w-[166px] h-[166px] bg-white rounded-full relative bottom-24 right-10'>
              <img
                src='src/assets/stats.png'
                alt='stats'
                className=' scale-[1.25] bottom-3 relative'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className='flex flex-col items-center w-full gap-40 pt-20 pb-52'>
      {/* search bar */}
      {/* <SearchBar /> */}

      {/* call to action */}
      <section className='flex flex-col max-w-7xl gap-20 bg-gradient items-center'>
        <h1 className='text-6xl font-bold text-center title w-10/12'>
          Encuentra el mejor equipo de trabajo para proyectos innovadores
        </h1>
        <article className=' bg-slate-600 flex p-20 gap-10 justify-between'>
          <div className='flex flex-col gap-16 justify-center w-[35%]'>
            <div className='flex flex-col gap-8'>
              <h3 className=' text-4xl text-darkpurple font-landing font-bold'>
                Trabajando en equipo multiplicamos nuestros logros.
              </h3>
              <p className='text-3xl w-full leading-[2.8rem]'>
                Conecta con otros talentos e impulsa tus habilidades colaborando
                en proyectos innovadores.
              </p>
            </div>
            <a href='/home' className='btn-call-to-action'>
              Empezar
            </a>
          </div>
          <ImageCalltoAction />
        </article>
      </section>

      {/* how to use */}
      <section className=' bg-slate-600 flex w-full max-w-6xl gap-10 text-white'>
        <div className='p-20 flex flex-col gap-20'>
          {howto === 'post' ? (
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl'>Lorem Ipsum Header</h4>
              <p>Lorem Ipsum 1</p>
              <p>Lorem Ipsum 2</p>
              <p>Lorem Ipsum 3</p>
            </div>
          ) : (
            <div className='flex flex-col gap-5'>
              <h4 className='text-2xl'>Lorem Ipsum Header 2</h4>
              <p>Lorem Ipsum 1</p>
              <p>Lorem Ipsum 2</p>
              <p>Lorem Ipsum 3</p>
            </div>
          )}
          <div className='flex gap-5'>
            <button
              className={` w-56 h-10 rounded-lg ${
                howto === 'post'
                  ? 'bg-white text-black'
                  : 'border-black border-2'
              }`}
              onClick={() => setHowto('post')}
            >
              Publicar proyecto
            </button>
            <button
              className={` w-56 h-10 rounded-lg ${
                howto === 'howtopost'
                  ? 'bg-white rounded-lg text-black'
                  : 'border-black border-2'
              }`}
              onClick={() => setHowto('howtopost')}
            >
              ¿Como publicarse?
            </button>
          </div>
        </div>
        <div className=' w-full bg-white m-1'>
          {howto === 'post' ? (
            <img src='' alt='post' />
          ) : (
            <img src='' alt='howtopost' />
          )}
        </div>
      </section>

      {/* projects */}
      <section className=' bg-slate-600 flex w-full gap-10 text-white items-center justify-center py-20'>
        <div className='max-w-6xl flex flex-col gap-10'>
          <h2>Projects</h2>
          <div className='flex gap-2'>
            <p>Estás buscando un proyecto en especifico?</p>
            <a href='/'>Search Projects</a>
          </div>
          <div className='grid grid-cols-3 gap-10'>
            {
              // projects position zero repeated 6 times
              projects.map((project) => (
                <CardMiniProject key={project.id} project={project} />
              ))
            }
          </div>
        </div>
      </section>

      {/* categories */}
      <section className=' bg-slate-600 flex w-full gap-10 text-white items-center justify-center py-20'>
        <div className='max-w-6xl w-full flex justify-around gap-10'>
          <h2 className='text-3xl'>Categories</h2>
          <div className='grid grid-cols-2 gap-5 gap-x-20'>
            {categories.map((category) => (
              <p className='text-2xl' key={category.id}>
                {category.name}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
