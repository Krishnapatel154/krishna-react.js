import React, { useContext } from 'react';
import { Themecontex } from '../context/Themecontext';
const Navbar = () => {
  const {theme}=useContext(Themecontex)
  return (
    <div>
        <h2>Thembar</h2>
        <h1>Theme is {theme}</h1>
    </div>
  )
}

export default Navbar