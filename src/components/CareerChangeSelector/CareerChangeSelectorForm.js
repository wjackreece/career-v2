import React from "react";

import { useNavigate } from "react-router-dom";

import "./CareerChangeSelector.css";

export const SplitResArrayContext = React.createContext();

function CareerChangeSelectorForm(props) {
  const { currentCareer, setCurrentCareer, desiredCareer, setDesiredCareer } =
    props;

  const navigate = useNavigate();

  const currentCareerChangeHandler = (e) => {
    setCurrentCareer(e.target.value);
  };
  const desiredCareerChangeHandler = (e) => {
    setDesiredCareer(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/chatGPTInfo");
  };

  return (
    <div className="careerChangeSelectorForm-container">
      <form action="" onSubmit={submitHandler}>
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
              onChange={currentCareerChangeHandler}
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
              onChange={desiredCareerChangeHandler}
            />{" "}
          </div>
        </div>
        <div className="selector-btn">
          <button type="submit" className="btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default CareerChangeSelectorForm;
