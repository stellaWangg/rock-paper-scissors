const btns = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const pplScore = document.querySelector("#pplScore");
const comScore = document.querySelector("#comScore");

let playerScore = 0;
let computerScore = 0;
let pplChoice;

const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (pplSelect) => {
  let comSelect = computerPlay();
  if (
    (pplSelect === "rock" && comSelect === "paper") ||
    (pplSelect === "paper" && comSelect === "scissors") ||
    (pplSelect === "scissors" && comSelect === "rock")
  ) {
    comScore.textContent = ++computerScore;
    result.textContent = "You Failed😭";
    if (computerScore === 5) {
      result.textContent = "You Failed, Reload to play again.";
      disableBtns();
    }
  } else if (pplSelect === comSelect) {
    result.textContent = "Tie";
  } else {
    pplScore.textContent = ++playerScore;
    result.textContent = "You Win!🔥";
    if (playerScore === 5) {
      result.textContent = "You Win,Reload to play again.";
      disableBtns();
    }
  }
  return;
};

// const game = () => {
//   for (let i = 0; i < 5; i++) {}
// };

computerPlay();

btns.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
function disableBtns() {
  btns.forEach((btn) => (btn.disabled = true));
}
