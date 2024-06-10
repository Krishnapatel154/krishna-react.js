import React, { useState } from "react";
import banner6 from "../asset/img1.avif"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(userData);

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
        
    <div >
      <div style={{position:"relative"  }}>
      <img
        src={banner6}
        alt=""
        style={{
          height:"650px",
          width:"100%",
        }}
      />
      <div
        style={{
          
          border: "1px solid black",
          height: "300px",
          width: "300px",
          textAlign: "center",
          position:"absolute",
          bottom:"200px",
          left:"570px",
          backgroundColor:" #d79aff"
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br />
          <br />
          <button type="submit" style={{backgroundColor:"teal",border:"none",borderRadius:"5px"}}>
            Login
          </button><br />
          <span>or Sign up Using</span><br />
          <div style={{width:"30%",marginTop:"2px",marginLeft:"110px",display:"flex",justifyContent:"space-around"}}>
        <p> <i className="bi bi-facebook"></i></p>
        <p><i class="bi bi-twitter"></i></p>
        <p><i class="bi bi-instagram"></i></p>
        <p><i class="bi bi-alexa"></i></p>
        </div>
        </form>
      </div>
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
  );
};

export default Login;
