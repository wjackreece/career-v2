import React, { useState } from "react";
import axios from "axios";

export default function ChatGPTInfo() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(HTTP, { prompt })
      .then((res) => {
        setResponse(res.data.data);
        //   console.log("setResponse", setResponse),
        //   console.log("response", response),
        //   console.log("setPrompt", setPrompt),
        //   console.log("prompt", prompt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="chatGPT-container">
      <h1 className="chatGPT-title">ChatGPT</h1>
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
        <p className="response-text">
          {response ? response : "ChatGPT Response here"}
        </p>
      </div>
    </div>
  );
}
