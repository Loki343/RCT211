import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
import Auth from '../components/Auth';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/show' element={<Auth><ShowProduct/></Auth>}/>
      <Route path='*' element={<h1>404 Page Not Found</h1>}/>
    </Routes>
  )
}

export default MainRoutes
