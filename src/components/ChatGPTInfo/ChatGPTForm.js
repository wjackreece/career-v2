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

        // Create the list element:
        // let resList = document.createElement("ul");

        // for (let i = 0; i < splitResArray.length; i++) {
        //   // Create the list item:
        //   let item = document.createElement("li");

        //   // Set its contents:
        //   item.appendChild(document.createTextNode(splitResArray[i]));

        //   // Add it to the list:
        //   resList.appendChild(item);
        // }

        // Finally, return the constructed list:

        // console.log("resList", resList);
        // setResponse(resList);

        setResponse(`This is the response: ${splitResArray}`);
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
        <p className="response-text">
          {response ? response : "ChatGPT Response here"}
        </p>
      </div>
    </div>
  );
}

export default ChatGPTForm;
