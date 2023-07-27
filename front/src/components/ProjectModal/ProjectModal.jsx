import { GrStatusGoodSmall } from 'react-icons/gr'
import { MdDateRange } from 'react-icons/md'
import { LuClock4 } from 'react-icons/lu'
import {
  BsFillExclamationOctagonFill,
  BsFillShareFill,
  BsFillTrophyFill,
} from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import { BiSolidUser } from 'react-icons/bi'
import { IoPersonAddSharp } from 'react-icons/io5'
import { HiUsers } from 'react-icons/hi'
import { useState } from 'react'
import { timestampToDate, convertMillisToReadable } from '@/libs/datesParsers'

export const ProjectModal = ({ project, setShowModal }) => {
  const [copyToClipboard, setCopyToClipboard] = useState(
    'https://www.google.com/'
  )

  // project = {
  //   "_id": "64c146d403121c2f00a46d7c",
  //   "title": "proyecto X 14",
  //   "category": "entretenimiento",
  //   "description": "El proyecto se trata de ...",
  //   "technologies": [
  //     "lavarel",
  //     "c#",
  //     "python"
  //   ],
  //   "language": [
  //     "ingles",
  //     "español"
  //   ],
  //   "requiredRoles": [
  //     {
  //       "_id": "0001",
  //       "rol": "backend",
  //       "senority": "junior",
  //       "totales": 2,
  //       "ocupados": 1
  //     },
  //     {
  //       "_id": "0002",
  //       "rol": "backend",
  //       "senority": "senior",
  //       "totales": 1,
  //       "ocupados": 0
  //     },
  //     {
  //       "_id": "0003",
  //       "rol": "frontend",
  //       "senority": "junior",
  //       "totales": 1,
  //       "ocupados": 0
  //     },
  //     {
  //       "_id": "0004",
  //       "rol": "devops",
  //       "senority": "semi-senior",
  //       "totales": 1,
  //       "ocupados": 0
  //     }
  //   ],
  //   "isRequiredRolsCompleted": false,
  //   "status": "no inicializado",
  //   "timeOfProject": 5184000,
  //   "startDate": 1639872000,
  //   "progressState": 0.35,
  //   "connectionLinks": [
  //     {
  //       "name": "discord",
  //       "link": "https://discord.gg/proyecto1"
  //     },
  //     {
  //       "name": "slack",
  //       "link": "https://slack.com/proyecto1"
  //     }
  //   ],
  //   "admins": [
  //     {
  //       "id": "64bd4781e31d9f15566d7e9b",
  //       "email": "castellanofacundo@gmail.com"
  //     }
  //   ],
  //   "collaborators": [
  //     "312c89487b9e1290",
  //     "3128b9e4879129c4"
  //   ],
  //   "postulants": [],
  //   "hidden": false,
  //   "createdAt": "2023-07-26T16:16:20.463Z",
  //   "updatedAt": "2023-07-26T16:16:20.463Z"
  // }

  return (
    <div
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={() => setShowModal(false)}
    >
      <div
        className='relative flex gap-5 text-white'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex w-[680px] flex-col gap-5 text-primaryDark'>
          <div className='flex items-center justify-between rounded-lg border-2 border-secondaryContainerBorder bg-white px-10 py-8 text-2xl'>
            <h4 className='font-extrabold'>{project.title}</h4>
            <div className='flex items-center gap-2 text-sm font-semibold capitalize'>
              <GrStatusGoodSmall className='text-green-400' />
              {project.status}
            </div>
          </div>

          <div>
            <div className='flex w-full flex-col rounded-t-lg border-2 border-b-0 border-secondaryContainerBorder bg-white px-10 py-8'>
              <div className='flex items-center justify-between'>
                <div className='font-bold'>
                  Categoría:
                  <span className='font-semibold capitalize text-secondaryText'>
                    {' '}
                    {project.category}
                  </span>
                </div>

                <div className='text-semibold flex flex-col items-center gap-1 text-sm font-semibold '>
                  <div className='flex items-center gap-3'>
                    <MdDateRange className='text-lg' />
                    Fecha de comienzo
                  </div>
                  <span className='text-secondaryText'>
                    {timestampToDate(project.startDate)}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2 py-2 font-bold'>
                <TbWorld className='text-lg' />
                Idiomas:
                <span className='font-medium capitalize text-secondaryText'>
                  {' '}
                  {project.language.map((lang, i) => (
                    <span key={i}>
                      {lang}
                      {i < project.language.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className='flex w-full flex-col border-2 border-secondaryContainerBorder bg-white px-10 py-8'>
              <div>
                <h4 className='mb-1 pb-6 font-bold'>
                  Descripción de este proyecto:
                </h4>
                <div className='flex h-40 flex-col gap-6 text-justify text-sm font-medium leading-6 text-secondaryText'>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
            <div className='flex w-full flex-col rounded-b-lg border-2 border-t-0 border-secondaryContainerBorder bg-white p-10 pt-20 text-sm'>
              <div className='flex items-center justify-between font-bold'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <LuClock4 className='text-lg' />
                    Duración aproximada
                  </div>
                  <span className='ml-8 font-semibold text-secondaryText'>
                    {/* Cuatro semanas */}
                    {convertMillisToReadable(project.timeOfProject)}
                  </span>
                </div>
                <div className='flex items-center gap-4 self-start'>
                  <BsFillTrophyFill />
                  Perfiles Junior
                </div>
              </div>
              <div className='flex items-center gap-4 pb-2 pt-10'>
                <BiSolidUser className='text-lg' />
                <p>
                  Publicado por{' '}
                  <span className='font-semibold'>
                    {project.admins[0].email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-80 flex-col rounded-lg bg-white font-bold text-primary'>
          <div className='flex flex-col items-center justify-between gap-5 rounded-t-md border-2  border-b-0 border-secondaryContainerBorder p-10 pb-6 font-bold'>
            <button className='w-full rounded-md bg-primary py-3 text-white'>
              Aplicar
            </button>
            <button className='w-full rounded-md border-2 border-primary border-secondaryContainerBorder py-3'>
              Guardar en favoritos
            </button>
            <div className='flex cursor-pointer items-center gap-8 self-start pt-7 font-semibold'>
              <BsFillExclamationOctagonFill className='text-lg' />
              Reportar este proyecto
            </div>
          </div>
          <div className='flex flex-col border-2 border-secondaryContainerBorder p-10 py-14 text-sm'>
            <div className='flex items-center gap-2 pb-2 font-semibold'>
              <IoPersonAddSharp />
              Perfiles vacantes:
            </div>
            <ul className='flex list-disc flex-col gap-1 pl-14 text-secondaryText'>
              {project.requiredRoles.map((rol) => (
                <li key={rol._id} className='capitalize'>
                  ({rol.totales - rol.ocupados}) {rol.rol} {rol.senority}
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-2 pt-7 font-semibold'>
              <HiUsers className='text-lg' />
              {/* Equipo de 12 integrantes */}
              Equipo de{' '}
              {project.requiredRoles.reduce(
                (acc, rol) => acc + rol.totales,
                0
              )}{' '}
              integrantes
            </div>
          </div>

          <div className='flex flex-col rounded-b-md border-2 border-t-0 border-secondaryContainerBorder p-10 py-14 text-sm'>
            <div className='flex items-center gap-2 pb-8 font-bold'>
              <BsFillShareFill />
              Compartir
            </div>

            <input
              className='mt-2 cursor-pointer rounded-md bg-primary bg-opacity-10 px-4 py-3 font-bold text-primary'
              type='text'
              value={copyToClipboard}
              readOnly
              onClick={() => {
                navigator.clipboard.writeText(copyToClipboard)
                setCopyToClipboard('Copiado!')
                setTimeout(() => {
                  setCopyToClipboard('https://www.google.com/')
                }, 1000)
              }}
            />
            <p
              className='cursor-pointer pt-4 underline'
              onClick={() => {
                navigator.clipboard.writeText(copyToClipboard)
                setCopyToClipboard('Copiado!')
                setTimeout(() => {
                  setCopyToClipboard('https://www.google.com/')
                }, 1000)
              }}
            >
              Copiar enlace
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
