import React from 'react'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import "./server"
import Home from './pages/Home'
import About from './pages/About'
import Vans, {loader as vansLoader } from './pages/Vans/Vans'
import VanDetails, {loader as vansLoaderbyid } from './pages/Vans/VanDetails'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import LayoutHost from './components/LayoutHost'
import HVans, {loader as hostvansLoader } from './pages/Host/HVans'
import HVanDetails, {loader as hostvansLoaderbyid } from './pages/Host/HVanDetails'
import HVansInfo from './pages/Host/HVanInfo'
import HvansPricing from './pages/Host/HVansPricing'
import HvansPhotos from './pages/Host/HVansPhotos'
import NotFound from './pages/NotFounnd'
import Error from './pages/Error'
import Login, {loader as loginLoader,action as loginAction} from './pages/Login'
import { requireAuth } from './utils'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} errorElement={<Error />}/>
      <Route 
        path="about" 
        element={<About />} />
      <Route 
        path="vans" 
        loader = {vansLoader} 
        element={<Vans />} />
      <Route 
        path="vans/:id" 
        loader = {vansLoaderbyid}  
        element={<VanDetails />} />
      <Route 
        path = "login" 
        element = {<Login />}
        loader = {loginLoader}
        action = {loginAction} />
      <Route 
        path = "host" 
        element = {<LayoutHost />}>
          <Route 
            index 
            element = {<Dashboard />} 
            loader={async ({request}) => await requireAuth(request)} />
          <Route 
            path="income" 
            element = {<Income />} 
            loader={async ({request}) => await requireAuth(request)}/>
          <Route 
            path="reviews" 
            element = {<Reviews />} 
            loader={async ({request}) => await requireAuth(request)} />
          <Route 
            path="vans" 
            loader = {hostvansLoader} 
            element={<HVans />} />
          <Route 
            path="vans/:id" 
            loader = {hostvansLoaderbyid} 
            element={<HVanDetails />} >
            <Route 
              index 
              element = {<HVansInfo />} 
              loader={async ({request}) => await requireAuth(request)} />
            <Route 
              path="pricing" 
              element={<HvansPricing />} 
              loader={async ({request}) => await requireAuth(request)} />
            <Route 
              path="photos" 
              element={<HvansPhotos />} 
              loader={async ({request}) => await requireAuth(request)} />
          </Route>
        </Route>
      <Route path="*" element={<NotFound />}/>
      </Route>
  ))

  return (
    <RouterProvider router = {router} />
  )
}

export default App
