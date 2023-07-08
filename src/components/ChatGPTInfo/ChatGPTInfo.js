import React, { useState } from "react";
import axios from "axios";

export default function ChatGPTInfo() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  return (
    <div className="chatGPT-container">
      <h1 className="chatGPT-title">ChatGPT</h1>
      <form className="chatGPT-form" onS></form>
    </div>
  );
}
