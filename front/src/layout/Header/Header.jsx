import { Link } from 'react-router-dom'
import UvaLogo from '@/assets/UvaLogo.jsx'
import { MdNotifications } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <header className=' mt-20 flex h-[80px] w-full max-w-6xl items-center justify-between'>
      <div>
        <UvaLogo
          className='logo grid cursor-pointer place-items-center'
          width={120}
          height={44}
        />
      </div>
      <nav className='flex gap-12'>
        {user && (
          <>
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
                  to={`/profile/${user.id}`}
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
