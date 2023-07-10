import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import Home from './Home/Home'
import Landing from './Landing/Landing'
import FormProject from './FormProject/FormProject'
import Login from './Login/Login'
import Register from './Register/Register'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/post-project' element={<FormProject />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
