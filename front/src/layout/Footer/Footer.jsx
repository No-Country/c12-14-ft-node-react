import AppStore from '@/assets/AppStore.png'
import GooglePlay from '@/assets/GooglePlay.png'
import {
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#5627B4]'>
      {/* Header */}
      <div className='flex justify-between px-40 py-10'>
        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-white'>Compañía</p>
          <ul className='flex flex-col gap-3'>
            <li className='rounded-lg text-sm font-bold text-white hover:bg-white hover:p-1 hover:text-black'>
              <Link to='about-us'>Acerca de Nosotros</Link>
            </li>
            <li className='rounded-lg text-sm font-bold text-white hover:bg-white hover:p-1 hover:text-black'>
              <Link to='contact'>Contáctanos</Link>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-white'>Install App</p>
          <ul className='flex flex-col gap-3'>
            <li className='text-sm font-thin text-white'>
              <img src={GooglePlay} alt='Download on Google Play' />
            </li>
            <li className='text-sm font-thin text-white'>
              <img src={AppStore} alt='Download on App Store' />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-between border-t border-t-gray-600 px-40 py-6 text-white'>
        <p>© 2023 - All rights reserved</p>
        <ul className='flex gap-6'>
          <li className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-600'>
            <AiOutlineInstagram className='h-[25px] w-[25px]' />
          </li>
          <li className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-600'>
            <AiOutlineDribbble className='h-[25px] w-[25px]' />
          </li>
          <li className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-600'>
            <AiOutlineTwitter className='h-[25px] w-[25px]' />
          </li>
          <li className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-600'>
            <AiFillYoutube className='h-[25px] w-[25px]' />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
