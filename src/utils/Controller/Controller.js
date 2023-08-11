const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + REACT_APP_apiKey,
};

const response = await axios.post(
  "https://api.openai.com/v1/chat/completions",
  data,
  { headers }
);
res.status(200).send({
  message: "Here it is.",
  data: await response.data.choices[0].message.content,
});
