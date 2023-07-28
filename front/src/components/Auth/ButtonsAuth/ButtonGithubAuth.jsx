import { BsGithub } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { loginWithGithub } from '@/redux/slices/authSlice'

function ButtonGithubAuth() {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(loginWithGithub())}
      className=' 
        flex items-center gap-2 rounded bg-white px-4 py-2 font-bold text-black shadow-md
      hover:bg-gray-700 hover:text-white '
    >
      <BsGithub />
      <span>Iniciar Sesion con GitHub</span>
    </button>
  )
}

export default ButtonGithubAuth
