import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'
import EditProduct from './EditProduct'
import ProductDetails from './ProductDetails'
import { ProductList } from './ProductList'


const Allroutes = () => {
  return (
    <div>
         <Routes>
            <Route path='/ProductList' element={<ProductList/>}></Route>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
           <Route path='/AddProduct' element={<AddProduct/>}></Route>
            <Route path='/Editproduct/:id' element={<EditProduct/>}></Route>
            <Route path='/Deleteproduct/:id' element={<DeleteProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes