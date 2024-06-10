import React from 'react';
import banner3 from "../asset/img1.avif";
import banner from "../asset/img2.avif";
import banner1 from "../asset/img3.webp";
const home = () => {
  return (
    <div style={{margin:"auto"}}  id="home">
      
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banner} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<footer>
		<div id="copyby">
		<p> &copy;2024 by Myfashion. All rights reserved.</p>
		</div>
		<div id="icon"style={{width:"30%",marginTop:"2px",marginLeft:"110px",display:"flex",justifyContent:"space-evenly"}}>
    
        <p> <i className="bi bi-facebook"></i></p>
        <p><i class="bi bi-twitter"></i></p>
        <p><i class="bi bi-instagram"></i></p>
        <p><i class="bi bi-alexa"></i></p>
   </div>
</footer>
    </div>
    
  )
}

export default home