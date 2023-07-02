import React from "react";
import { Button } from "../Button/Button";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to ReWork!</h1>
      <div className="expectation-container">
        <h2>Here's what to expect:</h2>
        <div className="grid-container">
          <div className="numbers-container">
            <div className="numbers">1</div>
            <div className="numbers">2</div>
            <div className="numbers">3</div>
          </div>
          <div className="number-desc-container">
            <div class="grid-item" className="number-desc">
              Tell us about you so we can customize ReWork to your situation.
            </div>
            <div class="grid-item" className="number-desc">
              Based on your answers, we'll show you the right prices and options
              for you.
            </div>
            <div class="grid-item" className="number-desc">
              Chose how you'd like to do your taxes, and we'll guide you rest of
              the way!
            </div>
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
