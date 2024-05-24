import React, { useState } from 'react'
let initalvalue={
  sname:"",
  email:"",
  password:"",
  grade:"",
  gender:""

}
const StudentForm = () => {
const [formdata,setformdata]=useState(initalvalue)
const{sname,email,password,grade,gender}=formdata

const handlechange=(e)=>{
 setformdata({...formdata,[e.target.name]:e.target.value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(formdata)
}
  return (
   <div>
     <h1>Student Form</h1>
     <form onSubmit={handlesubmit}>  
      <input type="text" name='sname' value={sname}onChange={(e)=>handlechange(e)} placeholder='name'/> <br />
      <input type="email" name='email'value={email}onChange={(e)=>handlechange(e)} placeholder='email'/><br />
      <input type="password" name='password'value={password} onChange={(e)=>handlechange(e)} placeholder='password' /><br />
      <select name="grade" id="" value={grade}onChange={(e)=>handlechange(e)}>
        <option value="">select your grade</option>
        <option value="Freshman">Freshman</option>
        <option value="Sophomore">Sophomore</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
      </select> <br />
     <label htmlFor=""> MALE</label><input type="radio"onChange={(e)=>handlechange(e)} name="gender" value={gender}/><br />
      <label htmlFor="">FEMALE</label><input type="radio" onChange={(e)=>handlechange(e)} name="gender" value={gender}/><br />
     <label htmlFor=""> OTHER</label><input type="radio"onChange={(e)=>handlechange(e)} name="gender" value={gender} /><br />
      <input type="submit" /><br />
     </form>
   </div>
   
  )
}

export default StudentForm