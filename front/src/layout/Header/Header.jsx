import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='h-[80px] flex justify-between items-center px-40 bg-[#4E5A65]'>
      <div>
        <p className='text-white text-2xl font-bold'>Logo</p>
      </div>
      <div>
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
      </div>
    </nav>
  )
}

export default Header
