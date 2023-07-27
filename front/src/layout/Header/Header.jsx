import { Link, useLocation, useNavigate } from 'react-router-dom'
import UvaLogo from '@/assets/images/UvaLogo.jsx'
import { MdNotifications } from 'react-icons/md'
import { BiLogOutCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { uvaApi } from '../../api/index'
import { setUser } from '../../redux/slices/userSlice'
import imagedefault from '@/assets/images/default.png'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const logout = await uvaApi.post('/auth/logout', {
      devCollabToken: user.token,
    })
    if (logout.data.session === 'destroyed') {
      setUser({})
      localStorage.removeItem('user')
      navigate('/')
      window.location.reload()
    }
  }

  return (
    <header className='mb-6 mt-20 flex h-[80px] w-full max-w-6xl items-center justify-between'>
      <div>
        <UvaLogo
          className='logo grid cursor-pointer place-items-center'
          width={120}
          height={44}
        />
      </div>
      <nav
        className={`flex w-2/3 items-center ${
          user ? 'justify-between' : 'justify-end'
        } gap-12`}
      >
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
              ${
                location.pathname === `/profile/${user._id}` && 'text-primary'
              }`}
              >
                <Link to={`/profile/${user._id}`}>Mi perfil</Link>
                {location.pathname === `/profile/${user._id}` && (
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
                  src={user.photo === '' ? imagedefault : user.photo}
{/*                   onError={(e) => {
                    e.target.src = { imagedefault }
                  }} */}
                  width={48}
                  height={48}
                  alt='foto de perfil'
                />
              </li>
              <li className='logout relative'>
                <BiLogOutCircle
                  size={24}
                  onClick={handleLogout}
                  className=' cursor-pointer text-primary'
                />
                <span
                  onClick={handleLogout}
                  className=' absolute hidden max-h-[40px] min-w-[100px] cursor-pointer rounded-lg bg-primary p-1 text-white hover:inline hover:bg-red-500'
                >
                  Cerrar Sesion
                </span>
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
