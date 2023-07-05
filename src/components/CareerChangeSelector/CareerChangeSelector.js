import React from "react";
import { Button } from "../Button/Button";
import "./CareerChangeSelector.css";

function CareerChangeSelector() {
  return (
    <div className="selector-container">
      <h1 className="selector-title">
        Tell us a little bit about you current career <br />
        and your career change goals{" "}
      </h1>
      <h2 className="selector-subtitle">
        This will help us make sure we analyze all possible options
      </h2>
      <form action="">
        <div className="career-selector">
          <div className="currentCareer">
            <div className="currentCareerQuestion">
              What is your current career?
            </div>
            <input
              type="text"
              name=""
              id="currentInput"
              placeholder="Ex: Server"
              required
            />
          </div>

          <div className="desiredCareer">
            <div className="desiredCareerQuestion">
              What is your desired career?
            </div>
            <input
              type="text"
              name=""
              id="desiredInput"
              placeholder="Ex: Electrical Engineer"
              required
            />{" "}
          </div>
        </div>
        <div className="selector-btn">
          <Button
            type="submit"
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CareerChangeSelector;
