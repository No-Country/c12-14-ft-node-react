import { Link } from 'react-router-dom'
import UvaLogo from '@/assets/UvaLogo.jsx'
import { MdNotifications } from 'react-icons/md'

const Header = () => {
  const { _id, id } = JSON.parse(localStorage.getItem('user'))
  return (
    <header className=' flex h-[80px] w-full max-w-6xl items-center justify-between pt-20'>
      <div>
        <UvaLogo
          className='logo grid place-items-center'
          width={120}
          height={44}
        />
      </div>
      <nav className='flex gap-12'>
        <ul className='flex items-center justify-between gap-4 font-bold text-primary'>
          <li>
            <Link
              className='decoration-primary hover:underline'
              to='/post-project'
            >
              Publicar un proyecto
            </Link>
          </li>
          <li>
            <Link className='decoration-primary hover:underline' to='/home'>
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              className='decoration-primary hover:underline'
              to={`/profile/${_id || id}`}
            >
              Mi perfil
            </Link>
          </li>
        </ul>
        <ul className='flex items-center justify-between gap-8'>
          <li>
            <MdNotifications size={24} className='text-primary' />
          </li>
          <li>
            <img
              src='assets/default.png'
              onError={(e) => {
                e.target.src = '/src/assets/default.png'
              }}
              width={48}
              height={48}
              alt='foto de perfil'
            />
          </li>
        </ul>
        <ul className='flex items-center gap-8'>
          <li>
            <Link to='/login' className='btn-login'>
              Iniciar sesión
            </Link>
          </li>
          <li>
            <Link to='/register' className='btn-register'>
              Registrarse
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
