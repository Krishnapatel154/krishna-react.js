 import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../service/firebase'

export const Login = () => {
   

    const handleclick=()=>{
        signInWithPopup(auth, provider)
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }
    const handlelogout=()=>{
        signOut(auth)
        .then((res)=>{alert("logout")})
        .catch((err)=>{console.log(err)})
    }
  return (
    <div style={{textAlign:"center",marginTop:"200px"}}>
        <GoogleButton  onClick={handleclick} style={{marginLeft:"500px"}}/><br/><br/>
        <button onClick={handlelogout} style={{borderRadius:"5px",width:"80px",height:"30px"}}>Logout</button>
    </div>
  )
}
  