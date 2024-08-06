"use strict";

const quoteNum = document.querySelector(".advice__no");
const quote = document.querySelector(".quote");
const diceIcon = document.querySelector(".dice");
const adviceContainer = document.querySelector("main");

const renderQuotes = function (data) {
  const quoteNum = data.slip.id;
  const advice = data.slip.advice;

  const html = `
  <main>
  <div class="advice__heading">
    <h1>ADVICE #<span class="advice__no">${quoteNum}</span></h1>
  </div>
  <div class="advice__text">
    <p class="quote">
      "${advice}"
    </p>
  </div>
  <div class="pattern__divider">
    <img
      src="./images/pattern-divider-mobile.svg"
      alt="pattern-divider"
      class="divider"
    />
  </div>

  <div class="dice__icon">
    <img src="./images/icon-dice.svg" alt="dice-icon" class="dice" />
  </div>
</main>
    `;
  adviceContainer.insertAdjacentHTML("beforeend", html);
};

const getQuote = function () {
  const request = fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderQuotes(data);
      //   return data;
    });
};

diceIcon.addEventListener("click", getQuote);
