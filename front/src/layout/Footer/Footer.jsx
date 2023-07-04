import AppStore from '@/assets/AppStore.png'
import GooglePlay from '@/assets/GooglePlay.png'
import {
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineTwitter,
  AiFillYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-[#1D2830]'>
      {/* Header */}
      <div className='py-10 flex justify-between px-40'>
        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold'>Company</p>
          <ul className='flex flex-col gap-3'>
            <li className='text-white font-thin text-sm'>About Us</li>
            <li className='text-white font-thin text-sm'>Blog</li>
            <li className='text-white font-thin text-sm'>Careers</li>
            <li className='text-white font-thin text-sm'>Contact Us</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold'>Support</p>
          <ul className='flex flex-col gap-3'>
            <li className='text-white font-thin text-sm'>Help Center</li>
            <li className='text-white font-thin text-sm'>Safety Center</li>
            <li className='text-white font-thin text-sm'>Community</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold'>Legal</p>
          <ul className='flex flex-col gap-3'>
            <li className='text-white font-thin text-sm'>Cookies Policy</li>
            <li className='text-white font-thin text-sm'>Privacy Policy</li>
            <li className='text-white font-thin text-sm'>Terms of Service</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-white font-semibold'>Install App</p>
          <ul className='flex flex-col gap-3'>
            <li className='text-white font-thin text-sm'>
              <img src={GooglePlay} alt='Download on Google Play' />
            </li>
            <li className='text-white font-thin text-sm'>
              <img src={AppStore} alt='Download on App Store' />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className='flex justify-between items-center py-6 text-white border-t-gray-600 border-t px-40'>
        <p>© 2023 - All rights reserved</p>
        <ul className='flex gap-6'>
          <li className='w-[40px] h-[40px] bg-gray-600 rounded-full flex justify-center items-center'>
            <AiOutlineInstagram className='w-[25px] h-[25px]' />
          </li>
          <li className='w-[40px] h-[40px] bg-gray-600 rounded-full flex justify-center items-center'>
            <AiOutlineDribbble className='w-[25px] h-[25px]' />
          </li>
          <li className='w-[40px] h-[40px] bg-gray-600 rounded-full flex justify-center items-center'>
            <AiOutlineTwitter className='w-[25px] h-[25px]' />
          </li>
          <li className='w-[40px] h-[40px] bg-gray-600 rounded-full flex justify-center items-center'>
            <AiFillYoutube className='w-[25px] h-[25px]' />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
