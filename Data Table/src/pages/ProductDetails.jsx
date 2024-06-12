import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/Product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleDelete = () => {
    axios .delete(`http://localhost:8000/Product/${id}`)
      .then(() => {
        let deletedProducts = JSON.parse(localStorage.getItem("deletedProducts")) || [];
        deletedProducts.push(product);
        localStorage.setItem("deletedProducts", JSON.stringify(deletedProducts));
        setIsDeleted(true);
        alert("Product deleted successfully!");
        console.log(product);
      })
      .catch((error) => console.error("Error deleting product:", error));
      
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  if (isDeleted) {
    return <Link to="/Deleteproduct">show Deleted Products</Link>;
  }
  return (
    <div style={{ textAlign: "center",backgroundColor:"#78ABA8",height:"490px",width:"50%",margin:"auto",marginTop:"20px"}} >
        <h2>ProductDetails</h2>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} height="200" />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p><br />
      <Link to={`/Editproduct/${product.id}`} style={{ marginRight: "10px",backgroundColor:"teal",padding:"7px 27px",borderRadius:"5px",color:"white" ,textDecoration:"none"}}>
        Edit
      </Link>
     
    {<Link to={`/Deleteproduct/${product.id}`} onClick={handleDelete} style={{ marginRight: "10px",backgroundColor:"teal",padding:"7px 27px",borderRadius:"5px",color:"white" ,textDecoration:"none"}}>
      Delete
    </Link>}
    </div>
  );
};

export default ProductDetails;
