import React from "react";
import { Button } from "../Button/Button";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to ReWork!</h1>
      <div className="expectation-container">
        <h2>Here's what to expect:</h2>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="number-desc">
          <div>
            Tell us about you so we can customize ReWork to your situation.
          </div>
          <div>
            Based on your answers, we'll show you the right prices and options
            for you.
          </div>
          <div>
            Chose how you'd like to do your taxes, and we'll guide you rest of
            the way!
          </div>
        </div>
        <div className="welcome-btn">
          <Button
            className="btn"
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

export default Welcome;
