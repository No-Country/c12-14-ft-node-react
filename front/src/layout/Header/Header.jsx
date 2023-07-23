import { Link, useLocation } from 'react-router-dom'
import UvaLogo from '@/assets/UvaLogo.jsx'
import { MdNotifications } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  const location = useLocation()
  return (
    <header className='mb-6 mt-20 flex h-[80px] w-full max-w-6xl items-center justify-between'>
      <div>
        <UvaLogo
          className='logo grid cursor-pointer place-items-center'
          width={120}
          height={44}
        />
      </div>
      <nav className='flex w-2/3 items-center justify-between gap-12'>
        {user && (
          <>
            <ul className='flex items-center justify-between gap-20 font-bold text-primaryDark'>
              <li
                className={`relative
              ${location.pathname === '/post-project' && 'text-primary'}`}
              >
                <Link to='/post-project'>Publicar un proyecto</Link>
                {location.pathname === '/post-project' && (
                  <div
                    className='absolute -bottom-1 h-1 w-full rounded-full bg-primary'
                    style={{ left: 0 }}
                  ></div>
                )}
              </li>
              {/* <li>
                <Link to='/home'>Proyectos</Link>
              </li>
              <li>
                <Link to={`/profile/${user.id}`}>Mi perfil</Link>
              </li> */}

              <li
                className={`relative
              ${location.pathname === '/home' && 'text-primary'}`}
              >
                <Link to='/home'>Proyectos</Link>
                {location.pathname === '/home' && (
                  <div
                    className='absolute -bottom-1 h-1 w-full rounded-full bg-primary'
                    style={{ left: 0 }}
                  ></div>
                )}
              </li>
              <li
                className={`relative
              ${location.pathname === `/profile/${user.id}` && 'text-primary'}`}
              >
                <Link to={`/profile/${user.id}`}>Mi perfil</Link>
                {location.pathname === `/profile/${user.id}` && (
                  <div
                    className='absolute -bottom-1 h-1 w-full rounded-full bg-primary'
                    style={{ left: 0 }}
                  ></div>
                )}
              </li>
            </ul>
            <ul className='flex items-center justify-between gap-8'>
              <li>
                <MdNotifications size={24} className='text-primary' />
              </li>
              <li>
                <img
                  className='rounded-full'
                  src={user.photo}
                  onError={(e) => {
                    e.target.src = '/src/assets/default.png'
                  }}
                  width={48}
                  height={48}
                  alt='foto de perfil'
                />
              </li>
            </ul>
          </>
        )}
        {!user && (
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
        )}
      </nav>
    </header>
  )
}

export default Header
