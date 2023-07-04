import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardMiniProject from '../../components/CardMiniProject/CardMiniProject'

const Landing = () => {
  const [howto, setHowto] = useState('post')

  // projects
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

  // categories
  const categories = [
    {
      name: 'Eccomerce',
      id: 1,
    },
    {
      name: 'Eccomerce',
      id: 2,
    },
    {
      name: 'Eccomerce',
      id: 3,
    },
    {
      name: 'Eccomerce',
      id: 4,
    },
    {
      name: 'Eccomerce',
      id: 5,
    },
    {
      name: 'Eccomerce',
      id: 6,
    },
  ]

  return (
    <main className='flex flex-col items-center w-full gap-20'>
      {/* search bar */}
      <SearchBar />

      {/* call to action */}
      <section className='flex flex-col max-w-6xl gap-20'>
        <h1 className='text-6xl font-bold text-center'>
          Lorem ipsum dolor sit amet consectetur. Iaculis arcu pulvinar
        </h1>
        <article className=' bg-slate-600 flex p-20 w-full gap-10'>
          <div className='flex flex-col gap-10 text-white'>
            <h3 className='text-3xl'>
              Lorem ipsum dolor sit amet consectetur. Cursus fringilla
            </h3>
            <p className='text-2xl' style={{ width: '420px' }}>
              Lorem ipsum dolor sit amet consectetur. A iaculis cras faucibus
              nisl quisque duis pretium. In donec
            </p>
            <button className=' w-80 h-10 bg-white rounded-lg text-black'>
              Empezar
            </button>
          </div>
          <div className=' w-full bg-white'>
            <img src='./' alt='image' />
          </div>
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
          <h2>Categories</h2>
          <div>
            {categories.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
