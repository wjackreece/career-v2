import React from "react";

import "./Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to ReWork!</h1>
      <div className="expectation-container">
        <h2>Here's what to expect:</h2>
        <div className="expectation-info-container">
          <div className="numbers-container">
            <div className="numbers">1</div>
            <div className="number-desc">
              Tell us about your current career and desired career aspirations
              so we can customize ReWork to your situations.
            </div>
          </div>
          <div className="numbers-container">
            <div className="numbers">2</div>
            <div className="number-desc">
              Based on your answers, we'll show you what characteristcs you
              already share with career fields within your desired scope.
            </div>
          </div>
          <div className="numbers-container">
            <div className="numbers">3</div>
            <div className="number-desc">
              Chose a specific career path, and we'll provide education
              requirements and job listings to get you started on your journey!
            </div>
          </div>
        </div>
        <div className="welcome-btn">
          <button onClick={() => navigate("/career-help")} className="btn">
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
