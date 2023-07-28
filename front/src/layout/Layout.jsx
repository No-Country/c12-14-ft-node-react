import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export const Layout = () => {
  return (
    <div className='flex flex-col items-center justify-between bg-white text-black'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
