//! -------------------------------- Variables ------------------------------- */

let board = document.querySelector("#board");
let reset = document.querySelector("#butt-on");
let turn = 2;
let boardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let display = document.querySelector("#winner");

//! ---------------------------- Winning Condition --------------------------- */

const chickenDinner = () => {
  if (
    (boardArr[0] === boardArr[1] && boardArr[0] === boardArr[2]) ||
    (boardArr[3] === boardArr[4] && boardArr[3] === boardArr[5]) ||
    (boardArr[6] === boardArr[7] && boardArr[6] === boardArr[8]) ||
    (boardArr[0] === boardArr[3] && boardArr[0] === boardArr[6]) ||
    (boardArr[1] === boardArr[4] && boardArr[1] === boardArr[7]) ||
    (boardArr[2] === boardArr[5] && boardArr[2] === boardArr[8]) ||
    (boardArr[0] === boardArr[4] && boardArr[0] === boardArr[8]) ||
    (boardArr[2] === boardArr[4] && boardArr[2] === boardArr[6])
  ) {
    if (boardArr[event.target.id] === true) {
      display.innerText = "Winner Winner Chicken Dinner for Player 1";
    } else if (boardArr[event.target.id] === false) {
      display.innerText = "Winner Winner Chicken Dinner for Player 2";
    }
  } else if (turn >= 11) {
    display.innerText = "Losers";
  }
};

//!--------------------------------Yeet----------------------------------------*/

for (let i = 0; i < 9; i++) {
  allSquares = document.querySelectorAll(".square");
  const square = document.createElement("div");
  square.classList.add("square");
  square.id = i;
  square.click = false;
  square.addEventListener("click", () => {
    if (square.click === false && turn % 2 === 0) {
      square.style.backgroundColor = "#B2BEBF";
      turn++;
      square.click = true;
      boardArr[square.id] = true;
    } else if (square.click === false && turn % 2 !== 0) {
      square.style.backgroundColor = "#E3C75F";
      turn++;
      square.click = true;
      boardArr[square.id] = false;
    }
    chickenDinner();
  });
  board.appendChild(square);
}
//! -------------------------------- Reset ----------------------------------*/

let lastSquare = document.getElementById("8");
reset.addEventListener("click", () => {
  allSquares.forEach((square) => {
    square.style.backgroundColor = "black";
    lastSquare.style.backgroundColor = "black";
    square.click = false;
    lastSquare.click = false;
    turn = 2;
    boardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    display.innerText = "";
  });
});
