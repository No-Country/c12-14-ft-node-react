import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '@/redux/slices/loginWithSlice'

function ButtonGoogleAuth() {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(loginWithGoogle())}
      className=' 
        shadow-md flex gap-2 items-center bg-white text-black font-bold py-2 px-4 rounded
      hover:bg-red-700 hover:text-white '
    >
      <FcGoogle />
      <span>Iniciar Sesion con Google</span>
    </button>
  )
}

export default ButtonGoogleAuth
