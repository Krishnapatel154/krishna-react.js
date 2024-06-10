import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Project = () => {
  const [data ,setdata]=useState([])
  const [loding,setloding]=useState(false)
  const {id}=useParams()
 useEffect(()=>{
  setloding(true)
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    setdata(data)
    setloding(false)
  })
  .catch((err)=> console.log(err))
 },[])
  return (
    <div  style={{display:"flex",justifyContent:"center"}} id='dcard'>
            <div key={data.id}  id='projectpage'>
            <h3>{data.category}</h3>
          <img src={data.image} alt="" style={{height:"200px",width:"200px",margin:"20px"}}/>
          <h3>{data.title}</h3>
          <h4>Price:${data.price}</h4>
          <p>{data.description}</p>
         </div>
    </div>
  )
}

export default Project