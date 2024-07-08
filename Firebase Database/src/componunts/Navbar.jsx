import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly", color:"black",marginTop:"5px"}}>
      <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
      <Link style={{textDecoration:"none"}} to={"/dashboard"}>Dashboard</Link>
      {/* <Link style={{textDecoration:"none"}} to={"/googleSignIn"}>GoogleSignIn</Link> */}
    </div>
  )
}

export default Navbar