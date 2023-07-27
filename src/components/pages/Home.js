import React from "react";
import "../../App.css";
import Hero from "../Hero/Hero.js";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Welcome />
    </div>
  );
}

export default Home;
