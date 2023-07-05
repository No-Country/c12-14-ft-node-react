import { GrStatusGoodSmall } from 'react-icons/gr'
import { MdArrowBackIos, MdOutlineDateRange } from 'react-icons/md'
import { LuClock4 } from 'react-icons/lu'
import {
  BsFillExclamationOctagonFill,
  BsFillShareFill,
  BsFillTrophyFill,
} from 'react-icons/bs'
import { BiSolidUser } from 'react-icons/bi'
import { IoPersonAddSharp } from 'react-icons/io5'
import { HiUsers } from 'react-icons/hi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeProjectModal } from '@/redux/slices/projectModalSlice'

export const ProjectModal = ({ project }) => {
  const dispatch = useDispatch()
  const [copyToClipboard, setCopyToClipboard] = useState(
    'https://www.google.com/'
  )

  return (
    <div
      className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm'
      onClick={() => dispatch(closeProjectModal())}
    >
      <div
        className='flex gap-5 text-white relative'
        onClick={(e) => e.stopPropagation()}
      >
        <MdArrowBackIos
          className='absolute text-5xl -top-14 left-0 text-white  cursor-pointer'
          onClick={() => dispatch(closeProjectModal())}
        />
        <div className='flex flex-col gap-5 w-[680px]'>
          <div className='flex bg-gray-600 rounded-lg items-center justify-between py-8 px-10 text-2xl'>
            <h4>Titulo de proyecto</h4>
            <div className='flex items-center gap-2 text-sm'>
              <GrStatusGoodSmall />
              Activo
            </div>
          </div>

          <div>
            <div className='bg-gray-600 rounded-t-lg border-b-2 w-full flex flex-col py-8 px-10'>
              <div className='flex items-center justify-between text-lg'>
                <div className='font-bold'>Categoria</div>
                <div className='flex items-center gap-3 text-sm'>
                  <MdOutlineDateRange className='text-xl' />
                  Fecha de comienzo
                </div>
              </div>
              <div className='flex items-center gap-2 text-sm pt-8 pb-4'>
                <GrStatusGoodSmall />
                Idioma
              </div>
            </div>
            <div className='bg-gray-600 w-full flex flex-col py-8 px-10'>
              <div>
                <h4 className='font-semibold text-sm mb-1'>
                  Descripción de este proyecto:
                </h4>
                <div className='text-sm pr-28 text-justify leading-6'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deleniti aut, unde commodi vero nam reprehenderit repudiandae
                  ea nostrum accusantium perspiciatis quis veniam illo,
                  laudantium reiciendis aspernatur mollitia perferendis fugit
                  nemo.
                  <ul>
                    <li>- Lorem ipsum dolor sit / amet consectetur.</li>
                    <li>
                      - In arcu nunc enim amet amet faucibus / in egestas.
                    </li>
                    <li>
                      - morbi sollicitudin. Convallis odio lacus enim lobortis
                      lacinia.
                    </li>
                    <li>- Lorem ipsum dolor sit / amet consectetur.</li>
                    <li>
                      - In arcu nunc enim amet amet faucibus / in egestas.
                    </li>
                    <li>
                      - morbi sollicitudin. Convallis odio lacus enim lobortis
                      lacinia.
                    </li>
                    <li>- Lorem ipsum dolor sit / amet consectetur.</li>
                    <li>
                      - In arcu nunc enim amet amet faucibus / in egestas.
                    </li>
                    <li>
                      - morbi sollicitudin. Convallis odio lacus enim lobortis
                      lacinia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='bg-gray-600 rounded-b-lg w-full text-sm flex flex-col p-10 pt-0'>
              <div className='flex items-center justify-between font-bold'>
                <div className='flex items-center gap-4'>
                  <LuClock4 className='text-lg' />
                  Duración aproximada
                </div>
                <div className='flex items-center gap-4'>
                  <BsFillTrophyFill />
                  Seniority Requerida
                </div>
              </div>
              <div className='flex items-center gap-1 pt-10 pb-2'>
                <BiSolidUser className='text-lg' />
                Publicado por <span className='font-semibold'>User test</span>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-600 rounded-lg w-80 flex flex-col'>
          <div className='flex border-b-2 flex-col gap-5 items-center justify-between p-10 font-bold text-xs'>
            <button className='bg-gray-800 w-full py-4 rounded-md'>
              Aplicar
            </button>
            <button className='border rounded-md py-4 w-full'>
              Guardar en favoritos
            </button>
            <div className='flex self-start pt-7 items-center gap-2 cursor-pointer font-normal'>
              <BsFillExclamationOctagonFill className='text-lg' />
              Reportar este proyecto
            </div>
          </div>
          <div className='flex flex-col p-10 py-14 text-sm border-b-2'>
            <div className='flex pb-2 items-center gap-2 font-normal'>
              <IoPersonAddSharp />
              Perfiles vacantes:
            </div>
            <ul className='list-disc pl-14 flex flex-col gap-1'>
              <li>(2) Frontend</li>
              <li>(1) Scrum Master</li>
              <li>(2) QA Tester</li>
              <li>(1) Product Owner</li>
            </ul>

            <div className='flex pt-7 items-center gap-2 font-normal'>
              <HiUsers className='text-lg' />
              Equipo de 12 integrantes
            </div>
          </div>

          <div className='flex flex-col p-10 py-14 text-sm'>
            <div className='flex items-center gap-2 pb-8 font-normal'>
              <BsFillShareFill />
              Compartir
            </div>

            <input
              className='rounded-md py-3 text-neutral-800 font-bold px-4 mt-2 cursor-pointer'
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
              className='underline cursor-pointer pt-4'
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
