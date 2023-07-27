import SearchBar from '../../components/SearchBar/SearchBar'
import CardMiniProject from '../../components/CardMiniProject/CardMiniProject'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '@/assets/rocketAnimation.json'
import { useEffect, useState } from 'react'
import { uvaApi } from '../../api/index'

const ImageCalltoAction = () => {
  return (
    <div className=' relative h-[653px] w-[662px]'>
      <div className=' grid h-[653px] w-[662px] place-items-center rounded-full bg-[#E9DFFD] text-3xl font-black'>
        <h2>{'<Desarrollo Front-End>'}</h2>
      </div>
      <div className=' absolute top-0 grid h-[653px] w-[662px]  grid-cols-2 grid-rows-2'>
        <div className=' flex justify-start'>
          <div className=' h-[282px] w-[270px] rounded-full bg-white'>
            <img src='src/assets/desktop.png' alt='desktop' />
          </div>
        </div>
        <div className=' relative  bottom-16  flex justify-end'>
          <div className=' h-[243px] w-[243px] rounded-full bg-white'>
            <img
              src='src/assets/components.png'
              alt='components'
              className=' scale-110'
            />
          </div>
        </div>
        <div className=' flex items-end justify-start'>
          <div className=' relative bottom-10 left-6 h-[200px] w-[200px] rounded-full bg-white'>
            <img
              src='src/assets/laptop.png'
              alt='laptop'
              className=' relative bottom-8 left-4 scale-[1.2]'
            />
          </div>
        </div>
        <div className=' flex items-end  justify-end'>
          <div className=' relative bottom-24 right-10 h-[166px] w-[166px] rounded-full bg-white'>
            <img
              src='src/assets/stats.png'
              alt='stats'
              className=' relative bottom-3 scale-[1.25]'
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
    <div className='absolute left-0 top-0 z-10 flex h-full w-full justify-center'>
      <div className='flex h-full w-full max-w-7xl justify-between'>
        <div className='flex flex-col justify-between'>
          <img className=' rotate-180' src='src/assets/boxes.png' alt='boxes' />
          <img className=' rotate-180' src='src/assets/boxes.png' alt='boxes' />
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
    <div className=' absolute left-0 top-0 z-10 grid h-full w-full grid-cols-12 grid-rows-6 items-end justify-items-center'>
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

const Landing = () => {
  const [categories, setCategories] = useState([])
  const [projects, setProjects] = useState([])

  const fetchDataCategories = async () => {
    const categories = await uvaApi.get('/categories')
    setCategories(categories.data.category)
  }

  const fetchDataProjects = async () => {
    const projects = await uvaApi.get('/projects/?limit=6&page=1&getPages=1')
    setProjects(projects.data.documentsCurrentPage)
  }

  useEffect(() => {
    fetchDataCategories()
    fetchDataProjects()
  }, [])

  return (
    <main className='flex w-full flex-col items-center gap-40 pb-20 pt-20'>
      {/* search bar */}
      <SearchBar />

      {/* call to action */}
      <section className='flex max-w-6xl flex-col items-center gap-40 bg-gradient'>
        <h1 className='title w-[90%] text-center text-6xl font-bold'>
          Encuentra el mejor equipo de trabajo para proyectos innovadores
        </h1>
        <article className='  flex justify-between gap-10'>
          <div className='flex w-[35%] flex-col justify-center gap-16'>
            <div className='flex flex-col gap-8'>
              <h3 className=' font-landing text-4xl font-bold text-primaryDark'>
                Trabajando en equipo multiplicamos nuestros logros.
              </h3>
              <p className='w-full text-3xl leading-[2.8rem]'>
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
        <div className='mt-24 flex flex-col gap-20'>
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
                className=' h-[26px] w-[30px]'
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
                className=' h-[26px] w-[30px]'
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
                className=' h-[26px] w-[30px]'
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
        <div className=' m-1 grid w-full place-items-center rounded-tr-[25%] bg-[#9eb5ff73] p-14'>
          <ImageHowtoUse />
        </div>
      </section>

      {/* projects */}
      <section className=' conic-gradient relative flex w-full items-center justify-center gap-10 py-20 text-white'>
        <div className='relative z-20 flex max-w-6xl flex-col gap-10'>
          <h2 className=' text-2xl font-bold'>Projects</h2>
          <div className='flex gap-2 text-xl'>
            <p>Estás buscando un proyecto en especifico?</p>
            <Link className=' font-bold underline' to='/home'>
              Search Projects
            </Link>
          </div>
          <div className='grid grid-cols-3 gap-10'>
            {projects.length > 0 &&
              // projects position zero repeated 6 times
              projects.map((project) => (
                <CardMiniProject key={project._id} project={project} />
              ))}
          </div>
        </div>
        <PathProjects />
      </section>

      {/* categories */}
      <section className='gradient relative flex w-full items-center justify-center gap-10 pb-20 pt-40 text-white'>
        <div className=' relative z-20 flex w-full max-w-6xl justify-around gap-10'>
          <h2 className='text-3xl'>Categories</h2>
          <div className='grid grid-cols-2 gap-5 gap-x-20'>
            {categories.length > 0 &&
              categories.map((category) => (
                <p className='text-2xl capitalize' key={category._id}>
                  {category.categoryName}
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
          <b className=' text-5xl font-black leading-[7rem]'>
            ¡Completamente remoto!
          </b>
        </h2>
        <img src='src/assets/teamwork.png' alt='' />
      </section>
    </main>
  )
}

export default Landing
