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
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    // Catch error after the fetch. Note: this custom error only shows if the server fails or returns an error respons
    if (!res.ok) throw new Error(`Something went wrong`);
    const datas = await res.json();
    console.log(datas);
    renderQuotes(datas);
  } catch (err) {
    alert(err.message);
  }
};

// Using the Fetch.....Then method
// const getQuote = function () {
//   const request = fetch("https://api.adviceslip.com/advice")
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Cannot Get Quotes (${response.status})`);
//       // console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderQuotes(data);
//       //   return data;
//     })
//     .catch((err) =>
//       alert(`Get a stable connection (${err.message})`)
//     );
// };

diceIcon.addEventListener("click", getQuote);
