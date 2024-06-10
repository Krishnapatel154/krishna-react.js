import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);  
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return loading ? <h1>Loading...</h1> : (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} >
      {data.map((el) => (
        <Link to={`/project/${el.id}`} key={el.id}>
          <Card style={{ width: '18rem', }} id='card'>
      <Card.Img variant="top" src={el.image} alt={el.title} style={{ height: "200px", width: "200px", margin: "20px" }} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
        {el.price}
        </Card.Text>
      </Card.Body>
    </Card>
        </Link>
      ))}
      
    </div>
  );
}

export default Products;

// t