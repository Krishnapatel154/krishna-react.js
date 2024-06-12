import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [page, setPage] = useState(1); 
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(""); 
  const [search, setSearch] = useState(""); 

  useEffect(() => {
    axios.get("http://localhost:8000/Product/", {
        params: {
          category: filter,
          _limit: "5",
          _page: page,
          _sort: "price",
          _order: sort,
          q: search,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [products,filter, sort,page]);

  const searchOperation = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 2000);
  };

  const resetAll = () => {
    setPage(1);
    setSort('');
    setFilter(null);
    setSearch('');
    alert('reset all');
  };

  return (
    <div id="product">
      <h2>Product </h2>
      <div className="Container">
        <div> 
          <button onClick={() => setSort("asc")}>Low To High Price</button>
          <button onClick={() => setSort("desc")}>High To Low Price</button>
        </div>

        <input  
          type="text"
          placeholder="Search"
          onChange={searchOperation}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Select Your choice.</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select>

        <button onClick={resetAll}>Reset</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
          padding: "20px", 
        }}>
        {products.map((el) => (
          <Link to={`/ProductDetails/${el.id}`} key={el.id} style={{textDecoration:"none", color:"black"}}>
            <div  style={{boxShadow:"0px 6px 6px rgba(0,0,0,0.25)", height:"600px",padding:"10px"}}>
              {/* <p>{el.id}</p> */}
              <img src={el.image} alt={el.title} height={200} width={200} />
              <p>{el.category}</p>
              <h3>{el.price}</h3>
              <i>{el.description}</i><br /><br />
              <br /><br />
            </div>
          </Link>
        ))}
      </div>
      <br />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <b>{page}</b>
      <button onClick={() => setPage(page + 1)} disabled={products.length<5}>
        Next
      </button>
      <br />
      <br />
    </div>
  );
};

export default ProductList;
