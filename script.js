var One, Two;

function playerOne() {
  One = Math.floor(Math.random() * 6) + 1;
  document.querySelector("#diceOne").src = `./images/dice${One}.png`;
}

function playerTwo() {
  Two = Math.floor(Math.random() * 6) + 1;
  document.querySelector("#diceTwo").src = `./images/dice${Two}.png`;
}

function Winner() {
  var won = "";
  if (One > Two) {
    won = "🚩Player 1 Wins";
    document.querySelector("#winnerText").innerHTML = won;
  } else if (Two > One) {
    won = "Player 2 Wins🚩";
    document.querySelector("#winnerText").innerHTML = won;
  } else {
    won = "Draw";
    document.querySelector("#winnerText").innerHTML = won;
  }
}

function playGame() {
  playerOne();
  playerTwo();
  Winner();
}
