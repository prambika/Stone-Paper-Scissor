let your = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourScore = document.querySelector("#your-score");
const compScore = document.querySelector("#comp-score");

const strtcompChoice = () => {
  const options = ["stone", "paper", "scissor"];
  const randomInx = Math.floor(Math.random() * 3);
  return options[randomInx];
};

const matchDraw = () => {
  msg.innerText = "Match Draw! Play Again ";
  msg.style.backgroundColor = "#1b4332";
};

let showWinner = (yourWin, yourChoice, compChoice) => {
  if (yourWin) {
    your++;
    yourScore.innerText = your;
    msg.innerText = `You are winner :) ${yourChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#2b9348";
  } else {
    computer++;
    compScore.innerText = computer;
    msg.innerText = `You lose the Game :( ${compChoice} beats ${yourChoice}`;

    msg.style.backgroundColor = "#ff0000";
  }
};

const startGame = (yourChoice) => {
  const compChoice = strtcompChoice();

  if (yourChoice === compChoice) {
    matchDraw();
  } else {
    let yourWin = true;
    if (yourChoice === "stone") {
      yourWin = compChoice === "paper" ? false : true;
    } else if (yourChoice === "paper") {
      yourWin = compChoice === "scissor" ? false : true;
    } else {
      yourWin = compChoice === "stone" ? false : true;
    }

    showWinner(yourWin, yourChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const yourChoice = choice.getAttribute("id");
    startGame(yourChoice);
  });
});
