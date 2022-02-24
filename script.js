"use strict";
const displayMessage = function (messages) {
  const message = document.querySelector(".message");
  message.textContent = messages;
};
const checkNumber = function (e) {
  const input = Number(document.querySelector(".guess").value);
  if (input === correctNumber) {
    body.classList.add("correct");
    displayMessage("Correct Number");
    Number(highScore.textContent) < score
      ? (highScore.textContent = score)
      : (highScore.textContent = highScore.textContent);
    guess.textContent = input;
    guess.style.width = "15rem";
  } else if (!input) {
    displayMessage("No Number!!!");
  } else if (input !== correctNumber) {
    if (score <= 1) {
      displayMessage("You Lost the game");
      body.classList.add("lose");
      scoreDisplay.textContent = "0";
    } else {
      input < correctNumber
        ? displayMessage("Too Low...")
        : displayMessage("Too High...");
      score--;
      scoreDisplay.textContent = score;
    }
  }
};

const clear = function () {
  score = 20;
  correctNumber = correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  scoreDisplay.textContent = score;
  guess.textContent = "?";
  body.classList.remove("correct", "lose");
  displayMessage("Start guessing");
  guess.style.width = "10rem";
};
let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const again = document.querySelector(".again").addEventListener("click", clear);
const guess = document.querySelector(".number");
const check = document
  .querySelector(".check")
  .addEventListener("click", checkNumber);

const highScore = document.querySelector(".highscore");
const scoreDisplay = document.querySelector(".score");

const body = document.querySelector("body");
