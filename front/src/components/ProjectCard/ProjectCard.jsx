import { GrStatusGoodSmall } from 'react-icons/gr'
import { BiSolidUser } from 'react-icons/bi'
import { MdOutlineDateRange } from 'react-icons/md'
import { useState } from 'react'

export const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='bg-gray-600 text-white w-[680px] font-sans ml-1 rounded-lg'>
      <div className='flex items-center justify-between px-8 pt-6 pb-4 text-xl'>
        <h4>Titulo de proyecto</h4>
        <div className='flex items-center gap-2 text-sm pr-12'>
          <GrStatusGoodSmall />
          Activo
        </div>
      </div>
      <div className='border-y-2 px-8'>
        <div className='flex gap-4 py-3 text-xs'>
          <div className='bg-[#35414B] rounded-full py-1 px-6'>Tecnologias</div>
          <div className='bg-[#35414B] rounded-full py-1 px-6'>Tecnologias</div>
        </div>
        <div className='py-4 text-sm'>
          <span className='font-semibold'>Descripción de este proyecto:</span>
          <p className={`py-1 line-clamp-2 ${showMore && 'line-clamp-none'}`}>
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
        <div className='flex justify-between items-center text-sm'>
          <p
            className='underline font-semibold mb-8 cursor-pointer'
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
      <div className='h-16 px-8 flex justify-between font-semibold text-sm'>
        <div className='flex items-center gap-4'>
          <MdOutlineDateRange className='text-lg' />
          Fecha de comienzo
        </div>
        <div className='flex items-center gap-4'>
          <MdOutlineDateRange className='text-lg' />
          Fecha de publicación
        </div>
      </div>
    </div>
  )
}
