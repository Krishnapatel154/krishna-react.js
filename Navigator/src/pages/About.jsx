import React from 'react'
import banner4 from "../asset/img4.avif"
import banner5 from "../asset/img5.jpg"
const About = () => {
  return (
    <div >
        {/* <h1 style={{marginLeft:"600px"}}>About</h1> */}
        <div id='i1'>
        <img src={banner4}/>
	<h3 id="title1"  >We Have Free Templates for Everyone</h3>
	<p id="para1">Our website templates are created with inspiration, checked for quality and originality and 
	meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them.
	You can modify them. You can use them to design websites for clients, so long as
	you agree with the You can even remove all our links if you want to.</p>
  <br /><br /><br /><br />
  <img src={banner5} alt="..."/>
  <h3 id="title1"  >We Have More Templates for You</h3>
	<p id="para1">Looking for more templates? Just browse through all our  and 
	find what you’re looking for. But if you don’t find any website template you can u service and tell us all about it.
	Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.</p>
        </div>
        <br /><br /><br /><br /><br /><br />
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

export default About