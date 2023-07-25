import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ChatGPTForm.css";

function ChatGPTForm(props) {
  const { currentCareer, desiredCareer } = props;
  const [response, setResponse] = useState([]);
  const HTTP = "http://localhost:8020/chat";

  let prompt = `Give me an numbered list with 7 shows the similarities between ${currentCareer}s and ${desiredCareer}`;

  console.log(currentCareer, desiredCareer, prompt);
  const handleLoad = () => {
    axios
      .post(HTTP, { prompt })
      .then((res) => {
        let resString = res.data.data;

        const splitResArray = resString.split(/(?=[0-9])/);
        console.log(splitResArray);
        console.log(currentCareer, desiredCareer, prompt);
        setResponse(splitResArray);
        console.log(`Response: ${response}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleLoad();

    console.log("loaded");
  }, []);
  // const handlePrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="chatGPTForm-container">
      <div className="response-background">
        {response.map((num, i) => {
          return (
            <p className="response-num" key={i}>
              {num}
            </p>
          );
        })}
      </div>
      <div className="responseInfo"></div>
    </div>
  );
}

export default ChatGPTForm;
