"use strict";

const quoteNum = document.querySelector(".advice__no");
const quote = document.querySelector(".quote");
const diceIcon = document.querySelector(".dice");
const adviceContainer = document.querySelector("main");

const renderQuotes = function (data) {
  quoteNum.textContent = data.slip.id;
  quote.textContent = data.slip.advice;
};

// Using the Async....Await method
const getQuote = async function () {
  const res = await fetch(`https://api.adviceslip.com/advice`);
  const datas = await res.json();
  console.log(datas);
  renderQuotes(datas);
};

// Using the Fetch.....Then method
// const getQuote = function () {
//   const request = fetch("https://api.adviceslip.com/advice")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderQuotes(data);
//       //   return data;
//     });
// };

diceIcon.addEventListener("click", getQuote);
