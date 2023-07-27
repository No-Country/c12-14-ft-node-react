import { GrStatusGoodSmall } from 'react-icons/gr'
import { BiSolidUser } from 'react-icons/bi'
import { MdDateRange } from 'react-icons/md'
import { useState } from 'react'
import { ProjectModal } from '../ProjectModal/ProjectModal'
import { iso8601ToDate, timestampToDate } from '@/libs/datesParsers'

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
          className='cursor-pointer font-bold capitalize'
          onClick={() => setShowModal(true)}
        >
          {project.title}
        </h4>
        <div className='flex items-center gap-2 pr-12 text-sm font-semibold capitalize text-primary'>
          <GrStatusGoodSmall
            className={`${project.status === 'activo' && 'text-green-400'} ${
              project.status === 'no inicializado' && 'text-orange-200'
            } ${project.status === 'finalizado' && 'text-red-400'}`}
          />
          {project.status}
        </div>
      </div>
      <div className='border-y-2 border-primary border-opacity-10 px-8'>
        <div className='flex cursor-default gap-4 py-3 text-xs'>
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className='flex items-center rounded-full border border-secondaryContainerBorder bg-primaryDark bg-opacity-50 px-6 py-1 text-center capitalize text-white'
            >
              {tech}
            </div>
          ))}
        </div>
        <div className='py-4 text-sm text-secondaryText'>
          <span className='font-semibold'>Descripción de este proyecto:</span>
          <p className={`line-clamp-2 py-1 ${showMore && 'line-clamp-none'}`}>
            {project.description}
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
            Publicado por{' '}
            <span className='font-semibold'>{project.admins[0].email}</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-8 py-2 text-sm font-semibold'>
        <div className='text-semibold flex flex-col items-center text-sm font-semibold '>
          <div className='flex items-center gap-3'>
            <MdDateRange className='text-lg' />
            Fecha de comienzo
          </div>
          <span className='text-secondaryText'>
            {project.startDate
              ? timestampToDate(project.startDate)
              : 'Sin fecha'}
          </span>
        </div>
        <div className='text-semibold flex flex-col items-center text-sm font-semibold '>
          <div className='flex items-center gap-3'>
            <MdDateRange className='text-lg' />
            Fecha de publicación
          </div>
          <span className='text-secondaryText'>
            {iso8601ToDate(project.createdAt)}
          </span>
        </div>
      </div>
    </div>
  )
}
