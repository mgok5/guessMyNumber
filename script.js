"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let message = document.querySelector(".message");
let number = document.querySelector(".number");

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    message.textContent = "No number!⛔";
  }

  //When player wins
  else if (guess === secretNumber) {
    message.textContent = "Correct Number!🎉";
    number.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //When guess is too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too high ↗" : "Too low ↘";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game!💥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Play again!

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);

  message.textContent = "Start guessing..";
  number.textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
});
