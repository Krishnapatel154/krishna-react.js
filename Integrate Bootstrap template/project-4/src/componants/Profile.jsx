import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Profile = () => {
  return (
    <div style={{display:"flex"}} id="card">
      <div style={{paddingTop:"10px"}}>
        <Card.Title>Hi i'm KRISHNA PATEL</Card.Title>
        <Card.Text>
          I am a fullstack d evloper .I have skill in HTML, CSS, Javascript,
          React,MySQL, Oracle Development IDEs: Eclipse IDE, Visual Studio Code.
        </Card.Text>
        <Button variant="primary">I'M Availble</Button>
        <div style={{width:"30%",marginTop:"2px",marginLeft:"110px",display:"flex",justifyContent:"space-around"}}>
        <p> <i className="bi bi-facebook"></i></p>
        <p><i class="bi bi-twitter"></i></p>
        <p><i class="bi bi-instagram"></i></p>
        <p><i class="bi bi-alexa"></i></p>
        </div>
      </div>
      <div>
        <img
          src="data:image/png;base64,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"
          alt=""
          height={"200px"}
        />
      </div>
    </div>
  );
};

export default Profile;
