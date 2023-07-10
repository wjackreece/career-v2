require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { PORT, REACT_APP_apiKey } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.post("/chat", async (req, res) => {
//   const { prompt } = req.body;
//   const config = new Configuration({
//     apiKey: REACT_APP_apiKey,
//   });

//   const openai = new OpenAIApi(config);
//   const completion = await openai.createCompletion({
//     model: "gpt-3.5-turbo",
//     max_tokens: 512,
//     temperature: 1,
//     prompt: prompt,
//   });

//   res.send(completion.data.choices[0].text);
// });

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: REACT_APP_apiKey,
});

const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + REACT_APP_apiKey,
  };
  const data = {
    model: "gpt-3.5-turbo",
    max_tokens: 512,
    temperature: 1,
    messages: [{ role: "user", content: prompt }],
  };

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    data,
    { headers }
  );
  // console.log(response.data.choices[0].text);
  res.status(200).send({
    message: "Here it is.",
    data: await response.data.choices[0].message.content,
  });
});
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
