import React, { useEffect, useState } from "react";

const DeleteProduct = () => {
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    const storedDeletedProducts = JSON.parse(localStorage.getItem("deletedProducts")) || [];
    setDeletedProducts(storedDeletedProducts);
  }, [deletedProducts]);
  const removeProduct = (indexToRemove) => {
    const updatedDeletedProducts = deletedProducts.filter((_, index) => index !== indexToRemove);
    setDeletedProducts(updatedDeletedProducts);
    localStorage.setItem("deletedProducts", JSON.stringify(updatedDeletedProducts));
  };
  return (
    <div>
      <h2>Deleted Products</h2>
      <table style={{ width: "100%", }}>
        <thead>
          <tr style={{ backgroundColor: "#365E32", color: "white" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Image</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Category</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {deletedProducts.map((product, index) => (
            <tr key={index} style={{backgroundColor:"#81A263"}} >
              <td style={{ border: "1px solid #ddd", padding: "8px" }}><img src={product.image} alt={product.title} width={100} style={{ borderRadius: "8px" }} /></td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.category}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>${product.price}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.description}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button onClick={() => removeProduct(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteProduct;
