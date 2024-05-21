import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
function App() {
  const [data, setdata] = useState([]);
 function Fetchdata()
  {
    // console.log("hdhdhddd");
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then((res) => res.json())
   .then((data) =>setdata(data))
   .catch((err)=>console.log(err))
  }

  return (
    <div>
      <button onClick={()=>Fetchdata()} style={{marginLeft:"600px",marginTop:"20px"}}>GET POST</button>
      <div>
        {data.map((el)=>( 
            <Post key={el.id} title={el.title} body={el.body}/>
        ))}
      </div>
    </div>
  );
}

export default App;
