import React, { useState } from "react";
import axios from "axios";

import "./ChatGPTForm.css";

function ChatGPTForm() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(HTTP, { prompt })
      .then((res) => {
        let resString = res.data.data;

        const splitResArray = resString.split(/(?=[0-9])/);
        console.log(splitResArray);

        setResponse(resString.split(/(?=[0-9])/));
        console.log(`Response: ${response}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="chatGPTForm-container">
      <form className="chatGPT-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="request"
          placeholder="Enter request here"
          value={prompt}
          onChange={handlePrompt}
        />
      </form>
      <div className="response-background">
        {/* <p className="response-text">
          {response ? response : "ChatGPT Response here"}
        </p> */}
        {response.map((num) => {
          return <p className="response-num">{num}</p>;
        })}
      </div>
      <div className="responseInfo"></div>
    </div>
  );
}

export default ChatGPTForm;
