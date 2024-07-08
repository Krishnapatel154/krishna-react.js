import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [products, setProducts] = useState([]); 
    const fetchdata=()=>{
        axios.get("https://fakestoreapi.com/products",{products})
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            alert(err);
          });
    }
    useEffect(() => {
       fetchdata() 
      }, []);
  return (
     <div>
        {products.map((el)=> (<div  style={{boxShadow:"0px 6px 6px rgba(0,0,0,0.25)", height:"350px",padding:"10px"}}>
              <img src={el.image} alt={el.title} height={200} width={200} />
              <p>{el.category}</p>
              <h3>{el.price}</h3>
              <i>{el.description}</i><br /><br />
            </div>))}
     </div>)}

export default Dashboard