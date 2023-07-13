import React, { useState } from "react";
import axios from "axios";

import "./ChatGPTForm.css";

function ChatGPTForm() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8020/chat";

  const handleLoad = (e) => {
    e.preventDefault();
    axios
      .post(HTTP, { prompt })
      .then((res) => {
        let charCheck = res.data.data;
        // let charChecked = "";
        // for (let i = 0; i < charCheck.innerHTML.length; i++) {
        //   if (charCheck.innerHTML[i] === "-") {
        //     charChecked += "<br>";
        //   } else {
        //     charChecked += charCheck.innerHTML[i];
        //   }
        // }
        // charCheck.innerHTML = charChecked;
        setResponse(charCheck);
        console.log(response);
        console.log(prompt);
        console.log("setResponse", setResponse),
          console.log("response", response),
          console.log("setPrompt", setPrompt),
          console.log("prompt", prompt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="chatGPTForm-container">
      <form className="chatGPT-form" onLoad={handleLoad}>
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

export default ChatGPTForm;
