import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '@/redux/slices/authSlice'

function ButtonGoogleAuth() {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => {
        dispatch(loginWithGoogle())
      }}
      className=' 
        flex items-center gap-2 rounded bg-white px-4 py-2 font-bold text-black shadow-md
      hover:bg-red-700 hover:text-white '
    >
      <FcGoogle />
      <span>Iniciar Sesion con Google</span>
    </button>
  )
}

export default ButtonGoogleAuth
