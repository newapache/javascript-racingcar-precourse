import { validateCar, validateCount } from "./validator.js";

const setVisiblity = (elem) => (elem.style.display = "inline");

const setPlayButton = () => {
  const countElem = document.getElementsByClassName("car-game-container")[0]
    .children[1];
  setVisiblity(countElem);
};

const getCarInput = (game) => {
  const inputElem = document.getElementById("car-names-input");
  const inputArr = inputElem.value.split(",");

  if (validateCar(inputArr)) {
    game.createCarObj(inputArr);
    setPlayButton();
  } else {
    alert("자동차 이름을 다시 입력하세요.");
    inputElem.value = "";
  }
};

const getCountInput = (game) => {
  const inputElem = document.getElementById("racing-count-input");
  const inputVal = inputElem.value;

  if (validateCount(inputVal)) {
    game.play(inputVal);
  } else {
    alert("시도할 횟수를 다시 입력하세요.");
    inputElem.value = "";
  }
};

export const setResult = (game) => {
  const result = document.getElementsByClassName("racing-result-container")[0];
  let div = document.createElement("div");
  setVisiblity(result);
  div.innerHTML = game.resultString;
  result.appendChild(div);
};

export const combineResult = (game, string) => {
  game.resultString += string + "<br>";
};

export const eventHandler = (game) => {
  document.getElementById("car-names-submit").addEventListener("click", () => {
    game.carList = [];
    getCarInput(game);
  });

  document
    .getElementById("racing-count-submit")
    .addEventListener("click", () => {
      getCountInput(game);
    });
};
