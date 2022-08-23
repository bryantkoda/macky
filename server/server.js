// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.
const express = require("express");
const cors = require("cors");
const shuffle = require("lodash/shuffle");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/questions", async (req, res) => {
  fs.readFile("./data/questions.json", "utf8", (err, jsonString) => {
    if (err) {
      res.status(400).send("Bad Request");
    }
    const { results } = JSON.parse(jsonString);
    const questions = results.map((question) => ({
      ...question,
      correct_answer: question.correct_answer === "True",
    }));
    const randomQuestions = shuffle(questions).slice(0, 10);
    res.status(200).send(randomQuestions);
  });
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
