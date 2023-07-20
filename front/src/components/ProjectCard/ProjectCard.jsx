import { GrStatusGoodSmall } from 'react-icons/gr'
import { BiSolidUser } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import { useState } from 'react'
import { ProjectModal } from '../ProjectModal/ProjectModal'

export const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='font-sans relative ml-1 w-[680px] rounded-lg border border-secondaryContainerBorder bg-white text-primaryDark'>
      {showModal && (
        <ProjectModal project={project} setShowModal={setShowModal} />
      )}
      <div className='flex items-center justify-between px-8 pb-4 pt-6 text-xl'>
        <h4
          className='cursor-pointer font-bold '
          onClick={() => setShowModal(true)}
        >
          Titulo de proyecto
        </h4>
        <div className='flex items-center gap-2 pr-12 text-sm font-semibold text-primary'>
          <GrStatusGoodSmall className='text-green-400' />
          Activo
        </div>
      </div>
      <div className='border-y-2 border-primary border-opacity-10 px-8'>
        <div className='flex gap-4 py-3 text-xs'>
          <div className='rounded-full border border-secondaryContainerBorder bg-primaryDark bg-opacity-50 px-6 py-1 text-white'>
            Tecnologias
          </div>
          <div className='rounded-full border border-secondaryContainerBorder bg-primaryDark bg-opacity-50 px-6 py-1 text-white'>
            Tecnologias
          </div>
        </div>
        <div className='py-4 text-sm text-secondaryText'>
          <span className='font-semibold'>Descripción de este proyecto:</span>
          <p className={`line-clamp-2 py-1 ${showMore && 'line-clamp-none'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            molestiae illum accusantium nobis, tempora nostrum tenetur vero
            perspiciatis officia quos cum architecto explicabo sapiente dolorem
            mollitia voluptatum dignissimos, natus amet. Corrupti libero, vero
            sunt quibusdam accusamus in neque reprehenderit minima pariatur
            consequatur aliquid excepturi perspiciatis explicabo ipsa asperiores
            voluptatem iste. Exercitationem repellendus consequatur ducimus
            voluptatibus, quos aliquam. Veniam, tenetur omnis! Pariatur, soluta
            architecto laudantium animi placeat odit quas sequi est iure cum
            magnam impedit cupiditate corrupti vitae obcaecati enim. Ea deleniti
            minima nobis animi iste iusto, similique aliquam minus in.
          </p>
        </div>
        <div className='flex items-center justify-between text-sm'>
          <p
            className='mb-8 cursor-pointer font-bold underline'
            onClick={() => setShowMore(!showMore)}
          >
            Leer más
          </p>
          <div className='flex items-center gap-1'>
            <BiSolidUser className='text-lg' />
            Publicado por <span className='font-semibold'>User test</span>
          </div>
        </div>
      </div>
      <div className='flex h-16 justify-between px-8 text-sm font-semibold'>
        <div className='flex items-center gap-4'>
          <MdDateRange className='text-lg' />
          Fecha de comienzo
        </div>
        <div className='flex items-center gap-4'>
          <MdDateRange className='text-lg' />
          Fecha de publicación
        </div>
      </div>
    </div>
  )
}
