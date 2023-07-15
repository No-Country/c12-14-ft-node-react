import { Link } from 'react-router-dom'
import UvaLogo from '@/assets/UvaLogo'
import { MdNotifications } from 'react-icons/md'

const Header = () => {
  return (
    <header className='h-[80px] flex justify-between items-center px-40 py-5 bg-[#4E5A65]'>
      <div>
        <UvaLogo className='h-[44px] w-[120px]' />
      </div>
      <nav className='flex gap-8'>
        <ul className='flex gap-4 justify-between items-center'>
          <li>
            <Link to='/post-project'>Publicar un proyecto</Link>
          </li>
          <li>
            <Link to='/home'>Proyectos</Link>
          </li>
          <li>
            <Link to={`/profile/${'Aqui va esta el id'}`}>Mi perfil</Link>
          </li>
        </ul>
        <ul className='flex gap-1 justify-between items-center'>
          <li>
            <MdNotifications />
          </li>
          <li>
            <img src={'variable img'} alt='foto de perfil' />
          </li>
        </ul>
        <ul className='flex gap-8 items-center'>
          <li>
            <Link to='/login' className='text-white'>
              Iniciar sesión
            </Link>
          </li>
          <li className='h-[44px] w-[120px] rounded-lg bg-[#E1E5EA] flex items-center justify-center'>
            <Link to='/register' className='text-black font-semibold'>
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
