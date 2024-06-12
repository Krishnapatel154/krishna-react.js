import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    let links=
    [   {path:"/ProductList",title:"Productlist"},
        {path:"/Addproduct",title:"Addproduct"},
        {path:"/Editproduct",title:"Editproduct"},
        {path:"/Deleteproduct",title:"Deleteproduct"}
    ]
    
  return (

    <div id='navbar' >
    {links.map((el)=>
    <NavLink 
    style={({ isActive }) => {
       return isActive ? {color:"white",textDecoration:"none"} : {color:"black",textDecoration:"none" };
     }}
    key={el.path} to={el.path}>{el.title}
    </NavLink>)}
    
   </div>
  
  )
}

export default Navbar