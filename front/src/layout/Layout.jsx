import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export const Layout = () => {
  return (
    <div className=' h-screen flex flex-col justify-between bg-white text-black items-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
