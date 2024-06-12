import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  
  const [editData, seteditData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  })
 const { id } = useParams()
 const[editHistory,seteditHistory]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/Product/${id}`)
      .then((res) => {
        seteditData(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  const handleChange = (e) => {
    const { name, value } = e.target
    seteditData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`http://localhost:8000/Product/${id}`, editData)
      .then((res) => {
        alert("Edited successfully")
        seteditHistory([...editHistory,editData])
        seteditData({
          image: '',
          title: '',
          price: '',
          category: '',
          description: ''
        })
      })
      .catch((err) => alert("Error in editing"))
  }

  return (
    <div style={{backgroundColor:"#BE7B72",height:"500px",width:"50%",margin:"auto",marginTop:"20px"}}>
      
      <form onSubmit={handleSubmit} style={{textAlign:"center",paddingTop:"50px"}}>
        <input 
          type="text" 
          name="image" 
          value={editData.image}
          placeholder="Enter image URL" 
          onChange={handleChange} 
        /><br /><br />
        <input 
          type="text" 
          name="title" 
          placeholder="Enter Product Title" 
          value={editData.title} 
          onChange={handleChange} 
        /><br /><br />
        <input 
          type="text" 
          name="price" 
          placeholder="Enter Product Price" 
          value={editData.price} 
          onChange={handleChange} 
        /><br /><br />
        <input 
          type="text" 
          name="category" 
          placeholder="Enter Product Category" 
          value={editData.category} 
          onChange={handleChange} 
        /><br /><br />
        <input 
          type="text" 
          name="description" 
          placeholder="Enter Product Description" 
          value={editData.description} 
          onChange={handleChange} 
        /><br /><br />
        
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "25%", margin: "auto" }}>
          <button type="submit">EDIT PRODUCT</button>
        </div>
      </form>     
    </div>
  )
}

export default EditProduct
