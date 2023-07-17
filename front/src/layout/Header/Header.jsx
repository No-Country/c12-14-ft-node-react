import { Link } from 'react-router-dom'
import UvaLogo from '@/assets/UvaLogo.jsx'
import { MdNotifications } from 'react-icons/md'

const Header = () => {
  return (
    <header className=' w-full max-w-6xl h-[80px] flex justify-between items-center pt-20'>
      <div>
        <UvaLogo className="logo grid place-items-center" width={120} height={44} />
      </div>
      <nav className='flex gap-12'>
        <ul className='flex gap-4 justify-between items-center text-primary font-bold'>
          <li>
            <Link className='hover:underline decoration-primary' to='/post-project'>Publicar un proyecto</Link>
          </li>
          <li>
            <Link className='hover:underline decoration-primary' to='/home'>Proyectos</Link>
          </li>
          <li>
            <Link className='hover:underline decoration-primary' to={`/profile/${'Aqui va esta el id'}`}>Mi perfil</Link>
          </li>
        </ul>
        <ul className='flex gap-8 justify-between items-center'>
          <li>
            <MdNotifications size={24} className='text-primary'/>
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
        <ul className='flex gap-8 items-center'>
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
