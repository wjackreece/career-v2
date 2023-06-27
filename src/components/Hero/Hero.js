import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <div className="hero-text">
        <h1>
          {" "}
          Career transition <span className="h1EndText">made easy</span>
        </h1>
        <p>
          A network with the skills, knowledge, and resources <br /> to support
          you through a successful career change{" "}
        </p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Let's Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
