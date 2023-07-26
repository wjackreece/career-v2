import React from "react";

// import { Button } from "../Button/Button";
import "./ChatGPTInfo.css";
import ChatGPTForm from "./ChatGPTForm";

export default function ChatGPTInfo({
  currentCareer,
  desiredCareer,
  chatGPTResponse,
}) {
  return (
    <div className="chatGPT-container">
      <h1 className="chatGPT-title">Great! Here's what we found . . .</h1>

      <h2 className="chatGPT-subtitle">
        {`Our research has determined that many ${currentCareer}s and ${desiredCareer}s share the
        following characteristics:`}
      </h2>
      <ChatGPTForm chatGPTResponse={chatGPTResponse} />
      <h2 className="selector-subtitle">
        {`Let's use this information to find job postings similar to ${desiredCareer}s.`}
      </h2>
      <div className="selector-btn">
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.indeed.com/jobs?q=${desiredCareer}`}
        >
          <button type="submit" className="btn">
            {`Find ${desiredCareer} jobs on Indeed`}
          </button>
        </a>
      </div>
    </div>
  );
}
