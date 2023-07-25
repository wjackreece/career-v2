import React from "react";

import "./ChatGPTForm.css";

function ChatGPTForm({ chatGPTResponse }) {
  // update
  return (
    <div className="chatGPTForm-container">
      <div className="response-background">
        {chatGPTResponse.map((num, i) => {
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
