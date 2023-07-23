import SearchBar from '../../components/SearchBar/SearchBar'
import CardMiniProject from '../../components/CardMiniProject/CardMiniProject'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '@/assets/rocketAnimation.json'

const Landing = () => {
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

  const ImageHowtoUse = () => {
    return (
      <div>
        <Lottie animationData={animationData} loop={true} />
      </div>
    )
  }

  const PathProjects = () => {
    return (
      <div className='absolute top-0 left-0 w-full h-full flex justify-center z-10'>
        <div className='w-full h-full max-w-7xl flex justify-between'>
          <div className='flex flex-col justify-between'>
            <img
              className=' rotate-180'
              src='src/assets/boxes.png'
              alt='boxes'
            />
            <img
              className=' rotate-180'
              src='src/assets/boxes.png'
              alt='boxes'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <img src='src/assets/boxes.png' alt='boxes' />
            <img src='src/assets/boxes.png' alt='boxes' />
          </div>
        </div>
      </div>
    )
  }

  const PathCategories = () => {
    return (
      <div className=' w-full items-end justify-items-center h-full z-10 grid grid-cols-12 grid-rows-6 absolute top-0 left-0'>
        <img
          className=' z-20'
          style={{ gridColumn: '1/3', gridRow: '5/6' }}
          src='src/assets/cube.png'
          alt='path'
        />
        <img
          className=' rotate-[70deg] scale-50'
          style={{ gridColumn: '1/3', gridRow: '2/3' }}
          src='src/assets/cube.png'
          alt='path'
        />
        <img
          className=' rotate-[90deg] scale-50'
          style={{ gridColumn: '11/12', gridRow: '2/3' }}
          src='src/assets/cube.png'
          alt='path'
        />
        <img
          className='z-10 w-full'
          style={{ gridColumn: '1/13', gridRow: '5/6' }}
          src='src/assets/stroke1.png'
          alt='path'
        />
        <img
          className=' z-10 w-full translate-y-[-80%]'
          style={{ gridColumn: '1/13', gridRow: '6/7' }}
          src='src/assets/stroke2.png'
          alt='path'
        />
        <img
          style={{ gridColumn: '4/6', gridRow: '1/2' }}
          src='src/assets/triangule.png'
          alt='path'
        />
        <img
          className=' rotate-[300deg]'
          style={{ gridColumn: '9/10', gridRow: '5/6' }}
          src='src/assets/triangule.png'
          alt='path'
        />
        <img
          style={{ gridColumn: '11/13', gridRow: '3/4' }}
          src='src/assets/triangule.png'
          alt='path'
        />
      </div>
    )
  }

  return (
    <main className='flex flex-col items-center w-full gap-40 pt-20 pb-20'>
      {/* search bar */}
      <SearchBar />

      {/* call to action */}
      <section className='flex flex-col max-w-6xl gap-40 bg-gradient items-center'>
        <h1 className='text-6xl font-bold text-center title w-[90%]'>
          Encuentra el mejor equipo de trabajo para proyectos innovadores
        </h1>
        <article className='  flex gap-10 justify-between'>
          <div className='flex flex-col gap-16 justify-center w-[35%]'>
            <div className='flex flex-col gap-8'>
              <h3 className=' text-4xl text-primaryDark font-landing font-bold'>
                Trabajando en equipo multiplicamos nuestros logros.
              </h3>
              <p className='text-3xl w-full leading-[2.8rem]'>
                Conecta con otros talentos e impulsa tus habilidades colaborando
                en proyectos innovadores.
              </p>
            </div>
            <Link to='/home' className='btn-call-to-action'>
              Empezar
            </Link>
          </div>
          <ImageCalltoAction />
        </article>
      </section>

      {/* how to use */}
      <section className='  flex w-full max-w-6xl gap-40'>
        <div className='flex flex-col gap-20 mt-24'>
          <div className='flex flex-col gap-5'>
            <h4 className=' text-2xl font-bold text-primary'>
              Lleva tus proyectos al siguiente nivel
            </h4>
          </div>
          <ul className=' flex flex-col gap-8'>
            <li className='flex gap-5'>
              <img
                src='src/assets/check.png'
                alt='icon'
                className=' w-[30px] h-[26px]'
              />
              <article className='flex flex-col gap-2'>
                <h3 className=' text-xl font-bold'>
                  Registrarse es completamente gratis
                </h3>
                <p className=' text-[#323238]'>
                  Explora proyectos y conecta con otros profesionales sin ningún
                  costo
                </p>
              </article>
            </li>
            <li className='flex gap-5'>
              <img
                src='src/assets/check.png'
                alt='icon'
                className=' w-[30px] h-[26px]'
              />
              <article className='flex flex-col gap-2'>
                <h3 className=' text-xl font-bold'>
                  Publica un proyecto o postúlate para colaborar
                </h3>
                <p className=' text-[#323238]'>
                  Nuestra plataforma te permite publicar tus ideas de negocio o
                  colaborar en otros proyectos
                </p>
              </article>
            </li>
            <li className='flex gap-5'>
              <img
                src='src/assets/check.png'
                alt='icon'
                className=' w-[30px] h-[26px]'
              />
              <article className='flex flex-col gap-2'>
                <h3 className=' text-xl font-bold'>
                  Potenciamos tu aprendizaje
                </h3>
                <p className=' text-[#323238]'>
                  Comparte tus habilidades y adquiere nuevos conocimientos a
                  través de la colaboración en equipo
                </p>
              </article>
            </li>
          </ul>
          <div className='flex gap-5'>
            <Link to='/post-project' className=' btn-call-to-action'>
              Publicar proyecto
            </Link>
            <button className=' btn-call2'>¿Como publicarse?</button>
          </div>
        </div>
        <div className=' w-full bg-[#9eb5ff73] rounded-tr-[25%] m-1 p-14 grid place-items-center'>
          <ImageHowtoUse />
        </div>
      </section>

      {/* projects */}
      <section className=' relative conic-gradient flex w-full gap-10 text-white items-center justify-center py-20'>
        <div className='relative max-w-6xl flex flex-col gap-10 z-20'>
          <h2 className=' font-bold text-2xl'>Projects</h2>
          <div className='flex gap-2 text-xl'>
            <p>Estás buscando un proyecto en especifico?</p>
            <Link className=' font-bold underline' to='/home'>
              Search Projects
            </Link>
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
        <PathProjects />
      </section>

      {/* categories */}
      <section className='relative gradient flex w-full gap-10 text-white items-center justify-center pb-20 pt-40'>
        <div className=' relative z-20 max-w-6xl w-full flex justify-around gap-10'>
          <h2 className='text-3xl'>Categories</h2>
          <div className='grid grid-cols-2 gap-5 gap-x-20'>
            {categories.map((category) => (
              <p className='text-2xl capitalize' key={category.id}>
                {category.name}
              </p>
            ))}
          </div>
        </div>
        <PathCategories />
      </section>

      {/* footer */}
      <section className='flex flex-col'>
        <h2 className=' text-center text-4xl font-bold'>
          ¡Oh! Casi olvidamos mencionar que es <br />
          <b className=' text-5xl leading-[7rem] font-black'>
            ¡Completamente remoto!
          </b>
        </h2>
        <img src='src/assets/teamwork.png' alt='' />
      </section>
    </main>
  )
}

export default Landing
