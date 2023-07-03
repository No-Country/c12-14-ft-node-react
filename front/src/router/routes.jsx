import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import Home from './Home/Home'
import Landing from './Landing/Landing'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/landing' element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
