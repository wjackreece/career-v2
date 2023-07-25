import React from "react";

import "./CareerChangeSelectorForm.css";

export const SplitResArrayContext = React.createContext();

function CareerChangeSelectorForm({
  currentCareer,
  setCurrentCareer,
  desiredCareer,
  setDesiredCareer,
  submitCareerChange,
}) {
  return (
    <div className="careerChangeSelectorForm-container">
      <form className="career-selector-form" action="">
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
              value={currentCareer}
              onChange={(e) => setCurrentCareer(e.target.value)}
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
              value={desiredCareer}
              onChange={(e) => setDesiredCareer(e.target.value)}
            />{" "}
          </div>
        </div>
        <div className="selector-btn">
          <button
            type="submit"
            className="btn"
            onClick={(e) => submitCareerChange(e)}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default CareerChangeSelectorForm;
