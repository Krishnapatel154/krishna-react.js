import { useState } from "react";

function CounterApp()

{
    const [value,setvalue]=useState(0)
return(
    <div id="c1">
      <p>COUNTER</p>
      <h1>{value}</h1>
      <button onClick={()=>setvalue(value+1)} style={{backgroundColor:"lightblue"}}>INCREMENT</button>
      <button onClick={()=>setvalue(value-1)} disabled={value==0} style={{backgroundColor:"red"}}>DECREMENT</button>
      <button onClick={()=>setvalue(0)}style={{backgroundColor:"teal"}}> RESET</button>
    </div>
)       
} 
export default CounterApp;