import { BsGithub } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { loginWithGithub } from '@/redux/slices/loginWithSlice'

function ButtonGithubAuth() {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(loginWithGithub())}
      className=' 
        shadow-md flex gap-2 items-center bg-white text-black font-bold py-2 px-4 rounded
      hover:bg-gray-700 hover:text-white '
    >
      <BsGithub />
      <span>Iniciar Sesion con GitHub</span>
    </button>
  )
}

export default ButtonGithubAuth
