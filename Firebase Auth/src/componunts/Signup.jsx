import React, { useState } from 'react'
import { auth } from '../service/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const handlesubmit=(e)=>{
  e.preventDefault()
  
  createUserWithEmailAndPassword(auth,email,password)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
    }
    
  return (
    <div style={{textAlign:"center",marginTop:"200px"}}>
        <h1>Signup</h1>
        <form action="" onSubmit={handlesubmit}>
            <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' /><br/>
            <input type="text" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password'/><br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup