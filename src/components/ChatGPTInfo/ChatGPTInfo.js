import React from "react";

// import { Button } from "../Button/Button";
import "./ChatGPTInfo.css";
import ChatGPTForm from "./ChatGPTForm";

export default function ChatGPTInfo(props) {
  const { currentCareer, desiredCareer } = props;
  console.log({ currentCareer, desiredCareer });
  return (
    <div className="chatGPT-container">
      <h1 className="chatGPT-title">Great! Here's what we found . . .</h1>

      <h2 className="chatGPT-subtitle">
        {`Our research has determined that many ${currentCareer}s and ${desiredCareer}s share the
        following characteristics:`}
      </h2>
      <ChatGPTForm
        currentCareer={currentCareer}
        desiredCareer={desiredCareer}
      />
      <h2 className="selector-subtitle">
        {`Let's use this information to find job postings similar to ${desiredCareer}s.`}
      </h2>
      <div className="selector-btn">
        <button type="submit" className="btn">
          Continue
        </button>
      </div>
    </div>
  );
}
