import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="../public/video/video-2.mp4" autoPlay loop muted />
      <h1> Career Changer</h1>
      <p>Let's get started!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let's Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Find More Info
        </Button>
      </div>
    </div>
  );
}

export default Hero;
