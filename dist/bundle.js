/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};


fetch(
  "https://raw.githubusercontent.com/KarolinaReseman/PROJECT-FLY/main/destination.json"
)
  .then((resp) => resp.json()) //transorm the data into json
  .then(function (data) {
    data.destination.forEach(function (el) {
      console.log(data.destination);
      document.getElementById(
        "flights"
      ).innerHTML += `<option> ${el.desc}</option>`;
    });
    console.log(data.destination[0].desc);
  });

let heading = document.querySelector("demo"),
  sumValue = sum(10, 5);

/******/ })()
;