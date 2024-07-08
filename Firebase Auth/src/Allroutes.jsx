import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './componunts/Signup'
import Login from './componunts/Login'
import GoogleSignIn from './componunts/GoogleSignIn'

const Allroutes = () => {
  return (
    <div>
        <Routes>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/googlesignin' element={<GoogleSignIn/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes