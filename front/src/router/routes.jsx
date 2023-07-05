import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import Home from './Home/Home'
import Landing from './Landing/Landing'
import { ProjectModal } from '../components/ProjectModal/ProjectModal'
import { useSelector } from 'react-redux'

export const AppRoutes = () => {
  const { isOpen } = useSelector((state) => state.projectModal)
  return (
    <BrowserRouter>
      {isOpen && <ProjectModal />}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/landing' element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
