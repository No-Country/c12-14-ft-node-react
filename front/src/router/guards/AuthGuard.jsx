import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'

export const AuthGuard = () => {
  const user = useSelector((state) => state.auth)

  if (!user?.user?._id) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}
