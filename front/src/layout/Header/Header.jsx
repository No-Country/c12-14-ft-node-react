import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='h-[80px] flex justify-between items-center px-40 bg-[#4E5A65]'>
      <div>
        <p className='text-white text-2xl font-bold'>Logo</p>
      </div>
      <div>
        <ul className='flex gap-8 items-center'>
          <li>
            <NavLink to='/login' className='text-white'>
              Iniciar sesión
            </NavLink>
          </li>
          <li className='h-[44px] w-[120px] rounded-lg bg-[#E1E5EA] flex items-center justify-center'>
            <NavLink to='/register' className='text-black font-semibold'>
              Registrarse
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
