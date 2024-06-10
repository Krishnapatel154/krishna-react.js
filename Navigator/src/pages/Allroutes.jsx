import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../componunts/Login'
import About from './About'
import Home from "./Home"
import Notfound from './Notfound'
import PrivateRoute from './PrivateRoute'
import Products from './Products'
import Project from './Project'
const Allroutes = () => {
  return (
 <div>
       <Routes > 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={
          <PrivateRoute>
              <Products />
         </PrivateRoute>
       }></Route>
        <Route path='/project/:id' element={<Project/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
    </Routes>
 </div>
    
  )
}

export default Allroutes