import { Navigate, Outlet } from 'react-router'

export const AuthGuard = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!(user.id || user._id)) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}
