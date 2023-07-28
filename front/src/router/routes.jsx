import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import Landing from './Landing/Landing'
import FormProject from './FormProject/FormProject'
import Home from './Home/Home.jsx'
import Login from './Login/Login'
import Register from './Register/Register'
import Profile from './Profile/Profile'
import { AuthGuard } from './guards/AuthGuard'
import About from './About/About'
import Contact from './Contact/Contact'
import Project from './Project/Project'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/about-us' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
          <Route element={<AuthGuard />}>
            <Route path='/post-project' element={<FormProject />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
