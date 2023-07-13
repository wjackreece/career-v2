import React from "react";

import "./CareerChangeSelector.css";
import CareerChangeSelectorForm from "./CareerChangeSelectorForm";

function CareerChangeSelector(props) {
  const { currentCareer, setCurrentCareer, desiredCareer, setDesiredCareer } =
    props;

  console.log(currentCareer, desiredCareer);
  // const saveCareerChangeDataHandler = (enteredCareerChangeData) => {
  //   const careerChangeData = {
  //     ...enteredCareerChangeData,
  //     id: Math.floor(Math.random() * 10000).toString(),
  //   };
  // };
  return (
    <div className="selector-container">
      <h1 className="selector-title">
        Tell us a little bit about you current career and your career change
        goals{" "}
      </h1>
      <h2 className="selector-subtitle">
        This will help us make sure we analyze all possible options
      </h2>
      <CareerChangeSelectorForm
        currentCareer={currentCareer}
        setCurrentCareer={setCurrentCareer}
        desiredCareer={desiredCareer}
        setDesiredCareer={setDesiredCareer}
        // onSaveCareerChangeData={saveCareerChangeDataHandler}
      />
    </div>
  );
}

export default CareerChangeSelector;
