import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import { auth } from '../service/firebase';
export const PrivateRoutes = ({children}) => {
    const [user] = useAuthState(auth);
    if(!user){
       alert("you are not login")
  return   <Navigate to={"/login"} />
       
      
    }
    return children ;  
}


