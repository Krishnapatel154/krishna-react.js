import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    let links=
        [   {path:"/",title:"Home"},
            {path:"/about",title:"About"},
            {path:"/products",title:"Products"},
            {path:"/login",title:""},
        ]
    
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"black"}}>
     {links.map((el)=>
     <NavLink 
     style={({ isActive }) => {
        return isActive ? {color:"teal",textDecoration:"none" } : {color:"white",textDecoration:"none" };
      }}
     key={el.path} to={el.path}>{el.title}
     </NavLink>)}
     <Link to="/login" ><button style={{backgroundColor:"teal",border:"none",borderRadius:"5px"}}>login</button></Link>
    </div>
  )
}

export default Navbar

