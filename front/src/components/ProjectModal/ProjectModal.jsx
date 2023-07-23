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

export const ProjectModal = ({ project, setShowModal }) => {
  const [copyToClipboard, setCopyToClipboard] = useState(
    'https://www.google.com/'
  )

  return (
    <div
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={() => setShowModal(false)}
    >
      <div
        className='relative flex gap-5 text-white'
        onClick={(e) => e.stopPropagation()}
      >
        {/* <IoIosArrowBack
          className='absolute -top-14 left-0 cursor-pointer text-5xl text-primary'
          onClick={() => setShowModal(false)}
        /> */}
        <div className='flex w-[680px] flex-col gap-5 text-primaryDark'>
          <div className='flex items-center justify-between rounded-lg border-2 border-secondaryContainerBorder bg-white px-10 py-8 text-2xl'>
            <h4 className='font-extrabold'>Titulo de proyecto</h4>
            <div className='flex items-center gap-2 text-sm font-semibold'>
              <GrStatusGoodSmall className='text-green-400' />
              Activo
            </div>
          </div>

          <div>
            <div className='flex w-full flex-col rounded-t-lg border-2 border-b-0 border-secondaryContainerBorder bg-white px-10 py-8'>
              <div className='flex items-center justify-between'>
                <div className='font-bold'>
                  Categoría:
                  <span className='font-semibold text-secondaryText'>
                    {' '}
                    Comercio
                  </span>
                </div>

                <div className='text-semibold flex flex-col items-center gap-1 text-sm font-semibold '>
                  <div className='flex items-center gap-3'>
                    <MdDateRange className='text-lg' />
                    Fecha de comienzo
                  </div>
                  <span className='text-secondaryText'>01-Sept-2023</span>
                </div>
              </div>
              <div className='flex items-center gap-2 py-2 font-bold'>
                <TbWorld className='text-lg' />
                Idioma:
                <span className='font-medium text-secondaryText'> Español</span>
              </div>
            </div>
            <div className='flex w-full flex-col border-2 border-secondaryContainerBorder bg-white px-10 py-8'>
              <div>
                <h4 className='mb-1 pb-6 text-sm font-bold'>
                  Descripción de este proyecto:
                </h4>
                <div className='flex flex-col gap-6 text-justify text-sm font-medium leading-6 text-secondaryText'>
                  <p>
                    Desarrollo de una aplicación de compras en línea que permite
                    a los usuarios explorar y comprar productos, administrar su
                    carrito de compras y realizar pagos seguros.
                  </p>
                  <p>
                    Ofrecerá una interfaz intuitiva, amplio catálogo de
                    productos, opciones de pago seguras y entrega rápida.
                    Impulsará la experiencia de compra con funciones de
                    seguimiento de pedidos y soporte al cliente, brindando una
                    solución completa para compradores y vendedores en el
                    mercado digital actual
                  </p>
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
                    Cuatro semanas
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
                  Publicado por <span className='font-semibold'>User test</span>
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
              <li>(2) Frontend</li>
              <li>(1) Scrum Master</li>
              <li>(2) QA Tester</li>
              <li>(1) Product Owner</li>
            </ul>

            <div className='flex items-center gap-2 pt-7 font-semibold'>
              <HiUsers className='text-lg' />
              Equipo de 12 integrantes
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
