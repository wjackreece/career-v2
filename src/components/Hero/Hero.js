import React from "react";
import "../../App.css";

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
          A network with the skills, knowledge, and resources to support you
          through a successful career change{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
