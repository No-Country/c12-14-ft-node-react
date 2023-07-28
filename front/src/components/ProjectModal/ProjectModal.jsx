import { GrStatusGoodSmall, GrClose } from 'react-icons/gr'
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
import { useSelector } from 'react-redux'
import { uvaApi } from '@/api'
import Swal from 'sweetalert2'

export const ProjectModal = ({ project, setShowModal }) => {
  const [copyToClipboard, setCopyToClipboard] = useState(
    'https://uva-to1s.onrender.com/'
  )
  const { user } = useSelector((state) => state.auth)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [currentRol, setCurrentRol] = useState({
    rol: '',
    senority: '',
  })
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // Constants
  const isCollaborator = project?.collaborators.find(
    (collaborator) => collaborator._id === user._id
  )
  const isAdmin = project?.admins.find((admin) => admin.userId === user._id)
  const isAvailableRoles = project?.requiredRoles.length > 0
  const isApplying = project?.postulants.find(
    (postulant) => postulant._id === user._id
  )

  const handleApply = async () => {
    const params = {
      projectId: project._id,
      postulantId: user._id,
      rol: {
        rol: currentRol.rol,
        senority: currentRol.senority,
      },
    }
    const { data } = await uvaApi.patch('/projects/postulant', params)
    if (data.msg.includes('Mail sended')) {
      Swal.fire({
        title: '¡Postulación enviada!',
        text: 'Revisa tu correo para ver más detalles',
        icon: 'success',
        confirmButtonText: 'Ok',
      })
    }
    if (data.msg.includes('Postulant was alredy postulated')) {
      if (data.postulantCondition === 'accepted') {
        Swal.fire({
          title: '¡Ya eres parte del proyecto!',
          text: 'Revisa tu correo para ver más detalles',
          icon: 'success',
          confirmButtonText: 'Ok',
        })
      }
      if (data.postulantCondition === 'pending') {
        Swal.fire({
          title: '¡Ya estás postulado!',
          text: 'Espera a que el administrador acepte tu postulación',
          icon: 'warning',
          confirmButtonText: 'Ok',
        })
      }
      if (data.postulantCondition === 'rejected') {
        Swal.fire({
          title: 'Fuiste rechazado',
          text: 'No te desanimes, sigue intentando',
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
    }
  }

  const handleDeleteProject = async () => {
    try {
      await uvaApi.delete(`/projects/${project._id}`)

      Swal.fire({
        title: 'Proyecto eliminado',
        text: 'El proyecto fue eliminado correctamente',
        icon: 'success',
        confirmButtonText: 'Ok',
      }).then(() => {
        window.location.reload()
      })
    } catch (error) {
      console.log(error)
    }
  }

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
          <GrClose
            className='absolute right-3 top-3 cursor-pointer text-xl'
            onClick={() => setShowModal(false)}
          />
          <div className='flex items-center justify-between rounded-lg border-2 border-secondaryContainerBorder bg-white px-10 py-8 text-2xl'>
            <h4 className='font-extrabold'>{project.title}</h4>
            <div className='flex items-center gap-2 text-sm font-semibold capitalize text-primary'>
              <GrStatusGoodSmall
                className={`${
                  project.status === 'activo' && 'text-green-400'
                } ${
                  project.status === 'no inicializado' && 'text-orange-200'
                } ${project.status === 'finalizado' && 'text-red-400'}`}
              />
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
                    {project.startDate
                      ? timestampToDate(project.startDate)
                      : 'Sin fecha'}
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2 py-2 font-bold'>
                <TbWorld className='text-lg' />
                Idiomas:
                <span className='font-medium capitalize text-secondaryText'>
                  {' '}
                  {project.language.length > 0
                    ? project.language.map((lang, i) => (
                        <span key={i}>
                          {lang}
                          {i < project.language.length - 1 && ', '}
                        </span>
                      ))
                    : 'Sin idiomas especificados'}
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
                    {project.timeOfProject
                      ? convertMillisToReadable(project.timeOfProject)
                      : 'Sin duración aproximada'}
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
                    {project.admins[0].username
                      ? project.admins[0].username
                      : 'User'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-80 flex-col rounded-lg bg-white font-bold text-primary'>
          <div className='flex flex-col items-center justify-between gap-5 rounded-t-md border-2  border-b-0 border-secondaryContainerBorder p-10 pb-6 font-bold'>
            {isCollaborator && (
              <button className='mt-8 w-full rounded-md bg-primary py-3 text-white'>
                Abandonar Proyecto
              </button>
            )}
            {isAdmin && (
              <>
                <button className='mt-8 w-full rounded-md bg-primary py-3 text-white'>
                  Editar Proyecto
                </button>
                <button
                  className='w-full rounded-md border-2 border-secondaryContainerBorder py-3'
                  onClick={() => setShowDeleteModal(true)}
                >
                  Eliminar Proyecto
                </button>
              </>
            )}

            {showDeleteModal && (
              <div
                className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setShowDeleteModal(false)
                  }
                }}
              >
                <div className='flex flex-col rounded-md bg-white p-10'>
                  <h3 className='mb-5 text-center text-xl font-bold'>
                    ¿Estás seguro de que quieres eliminar este proyecto?
                  </h3>
                  <div className='flex items-center justify-between gap-4'>
                    <button
                      className='w-full rounded-md bg-primary py-3 text-white'
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      className='w-full rounded-md border-2 border-secondaryContainerBorder py-3'
                      onClick={() => {
                        setShowDeleteModal(false)
                        handleDeleteProject(project._id)
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            )}
            {!isCollaborator && !isAdmin && (
              <>
                <button
                  className='w-full rounded-md bg-primary py-3 text-white disabled:bg-opacity-50'
                  disabled={isApplying || !isAvailableRoles}
                  onClick={() => setShowApplyModal(true)}
                >
                  Aplicar
                </button>
                <button className='w-full rounded-md border-2 border-primary border-secondaryContainerBorder py-3'>
                  Guardar en favoritos
                </button>
              </>
            )}
            {showApplyModal && (
              <div
                className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setCurrentRol({
                      rol: '',
                      senority: '  ',
                    })
                    setShowApplyModal(false)
                  }
                }}
              >
                <div className='relative rounded-lg bg-white p-10'>
                  {
                    <div className='flex flex-col items-center gap-4'>
                      <GrClose
                        className='absolute right-3 top-3 cursor-pointer text-lg'
                        onClick={() => {
                          setCurrentRol({
                            rol: '',
                            senority: '  ',
                          })
                          setShowApplyModal(false)
                        }}
                      />
                      <div className='flex flex-col items-center gap-2'>
                        <h3 className='text-xl font-bold'>
                          Aplicar a este proyecto
                        </h3>
                        <p className='text-secondaryText'>
                          Selecciona el rol al que quieres aplicar
                        </p>
                      </div>
                      <div className='flex flex-col gap-4'>
                        {project.requiredRoles.map((rol) => (
                          <div
                            key={rol.id || rol._id}
                            className='flex items-center gap-4 capitalize'
                          >
                            <input
                              type='radio'
                              name='rol'
                              id={rol.id || rol._id}
                              value={JSON.stringify(rol)}
                              onChange={(e) =>
                                setCurrentRol(JSON.parse(e.target.value))
                              }
                            />
                            <label htmlFor={rol.id || rol._id}>
                              {rol.rol} {rol.senority}
                            </label>
                          </div>
                        ))}
                      </div>
                      <button
                        className='w-full rounded-md bg-primary py-3 text-white'
                        onClick={() => {
                          handleApply(project._id, currentRol)
                          setShowApplyModal(false)
                        }}
                      >
                        Aplicar
                      </button>
                    </div>
                  }
                </div>
              </div>
            )}
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
              {project.requiredRoles.length > 0 ? (
                project.requiredRoles.map((rol) => {
                  return (
                    <li key={rol.id || rol._id} className='capitalize'>
                      ({rol.totales - rol.ocupados}) {rol.rol} {rol.senority}
                    </li>
                  )
                })
              ) : (
                <li className='font-normal'>
                  No hay roles requeridos para este proyecto
                </li>
              )}
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

          <div className='flex h-full flex-col rounded-b-md border-2 border-t-0 border-secondaryContainerBorder p-10 py-14 text-sm'>
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
                  setCopyToClipboard('https://uva-to1s.onrender.com/')
                }, 1500)
              }}
            />
            <p
              className='cursor-pointer pt-4 underline'
              onClick={() => {
                navigator.clipboard.writeText(copyToClipboard)
                setCopyToClipboard('Copiado!')
                setTimeout(() => {
                  setCopyToClipboard('https://uva-to1s.onrender.com/')
                }, 1500)
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
