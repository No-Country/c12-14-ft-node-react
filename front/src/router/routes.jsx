import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import Landing from './Landing/Landing'
import FormProject from './FormProject/FormProject'
import Home from './Home/Home.jsx'
import Login from './Login/Login'
import Register from './Register/Register'
import Profile from './Profile/Profile'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/post-project' element={<FormProject />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
