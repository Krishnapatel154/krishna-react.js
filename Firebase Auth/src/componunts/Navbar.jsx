import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-evenly", color:"black",marginTop:"5px"}}>
        <Link style={{textDecoration:"none"}} to={"/signup"}>Signup</Link>
        <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
        <Link style={{textDecoration:"none"}} to={"/googlesignin"}>GoogleSignIn</Link>
    </div>
    </div>
  )
}

export default Navbar