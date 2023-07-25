import React from "react";

import "./CareerChangeSelector.css";
import CareerChangeSelectorForm from "./CareerChangeSelectorForm";
import LoadingPage from "../LoadingPage/LoadingPage";
import ChatGPTInfo from "../ChatGPTInfo/ChatGPTInfo";
function CareerChange({
  currentCareer,
  setCurrentCareer,
  desiredCareer,
  setDesiredCareer,
  submitCareerChange,
  isLoading,
  chatGPTResponse,
}) {
  if (isLoading) {
    return <LoadingPage />;
  }
  if (chatGPTResponse.length > 0) {
    return (
      <ChatGPTInfo
        currentCareer={currentCareer}
        desiredCareer={desiredCareer}
        chatGPTResponse={chatGPTResponse}
      />
    );
  }
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
        submitCareerChange={submitCareerChange}
      />
    </div>
  );
}

export default CareerChange;
