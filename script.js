"use strict";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    if (!alert("Be careful, you might break the calculator. Dividing by 0 is undefined")) {
      window.location.reload();
    }
  } else {
    return a / b;
  }
};

const backspace = document.querySelector(".backspace");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const displayCalc = document.querySelector("#display");
const opAdd = document.querySelector(".add");
const opSubtract = document.querySelector(".subtract");
const opMultiply = document.querySelector(".multiply");
const opDivide = document.querySelector(".divide");
const opEqual = document.querySelector(".equal");
const num0 = document.querySelector(".num0");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");

let dispVal1, dispVal2, chosenOP;
let operatorIsClicked = false;

const operate = function (op, a, b) {
  const solution = op(a, b);
  if (Number.isInteger(solution)) {
    displayCalc.textContent = `${solution}`;
  } else {
    displayCalc.textContent = `${solution.toFixed(5)}`;
  }
};

const clearDisp = function () {
  if (operatorIsClicked === true) {
    displayCalc.textContent = "";
    operatorIsClicked = false;
  }
};

const limitChars = function () {
  if (displayCalc.textContent.length > 8) {
    displayCalc.textContent = displayCalc.textContent.substring(0, 8);
  }
};
// const storeVal1 = function () {
//   dispVal1 = Number(displayCalc.textContent);
//   operatorIsClicked = true;
// };

num0.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 0;
  limitChars();
});

num1.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 1;
  limitChars();
});

num2.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 2;
  limitChars();
});

num3.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 3;
  limitChars();
});

num4.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 4;
  limitChars();
});

num5.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 5;
  limitChars();
});

num6.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 6;
  limitChars();
});

num7.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 7;
  limitChars();
});

num8.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 8;
  limitChars();
});

num9.addEventListener("click", function () {
  clearDisp();
  displayCalc.textContent += 9;
  limitChars();
});

opAdd.addEventListener("click", function (e) {
  // console.log(dispVal1, dispVal2);
  if (dispVal1 && !dispVal2) {
    dispVal2 = Number(displayCalc.textContent);
    operate(chosenOP, dispVal1, dispVal2);
  }
  dispVal2 = undefined;
  dispVal1 = Number(displayCalc.textContent);
  operatorIsClicked = true;
  chosenOP = add;
});

opSubtract.addEventListener("click", function () {
  if (dispVal1 && !dispVal2) {
    dispVal2 = Number(displayCalc.textContent);
    operate(chosenOP, dispVal1, dispVal2);
  }
  dispVal2 = undefined;
  dispVal1 = Number(displayCalc.textContent);
  operatorIsClicked = true;
  chosenOP = subtract;
});

opMultiply.addEventListener("click", function () {
  if (dispVal1 && !dispVal2) {
    dispVal2 = Number(displayCalc.textContent);
    operate(chosenOP, dispVal1, dispVal2);
  }
  dispVal2 = undefined;
  dispVal1 = Number(displayCalc.textContent);
  operatorIsClicked = true;
  chosenOP = multiply;
});

opDivide.addEventListener("click", function () {
  if (dispVal1 && !dispVal2) {
    dispVal2 = Number(displayCalc.textContent);
    operate(chosenOP, dispVal1, dispVal2);
  }
  dispVal2 = undefined;
  dispVal1 = Number(displayCalc.textContent);
  operatorIsClicked = true;
  chosenOP = divide;
});

opEqual.addEventListener("click", function () {
  dispVal2 = Number(displayCalc.textContent);
  operate(chosenOP, dispVal1, dispVal2);
});

clear.addEventListener("click", function () {
  displayCalc.textContent = "";
  operatorIsClicked = false;
  // window.location.reload();
});

decimal.addEventListener("click", function () {
  if (displayCalc.textContent.includes(".")) {
    decimal.disabled = true;
  } else {
    displayCalc.textContent += ".";
  }
  decimal.disabled = false;
});

backspace.addEventListener("click", function () {
  displayCalc.textContent = displayCalc.textContent.slice(0, -1);
});
