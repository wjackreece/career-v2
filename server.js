const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.REACT_APP_apiKey,
});

const openai = new OpenAIApi(config);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const complettion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 512,
    temperature: 1,
    prompt: prompt,
  });
  res.send(complettion.data.choices[0].text);
});
const PORT = 8020;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
