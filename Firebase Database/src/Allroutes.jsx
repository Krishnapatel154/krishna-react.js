import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './componunts/Dashboard'
import { Login } from './componunts/Login'
import {PrivateRoutes} from './componunts/PrivateRoutes'
const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<PrivateRoutes>
                <Dashboard/>
            </PrivateRoutes>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes