import "./HeroImgStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="into-img"/>
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1> <br/>
        <div className="button">
        <Link to="/project" className="btn">Project</Link>
        <Link to="contact" className="btn">Contact</Link> 
        </div>
      </div>
    </div>
  )
}
export default HeroImg;