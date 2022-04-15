let winCount = 0;
let lossCount = 0;

const gameChoice = document.querySelectorAll("button");

gameChoice.forEach((choice) =>
  choice.addEventListener("click", (e) => playGame(e.target))
);

const playGame = (choice) => {
  const userChoice = choice.id;
  const computerChoice = getComputerChoice();

  const computerChoiceMessage = document.getElementById("pc");
  computerChoiceMessage.style.display = "block";
  computerChoiceMessage.textContent = computerChoice;

  gameWinner(userChoice, computerChoice);
};

const getComputerChoice = () => {
  const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
};

const gameWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) gameResult("TIE");

  switch (userChoice) {
    case "ROCK":
      if (computerChoice === "PAPER") gameResult("LOSE");
      if (computerChoice === "SCISSORS") gameResult("WIN");
      break;
    case "PAPER":
      if (computerChoice === "SCISSORS") gameResult("LOSE");
      if (computerChoice === "ROCK") gameResult("WIN");
      break;
    case "SCISSORS":
      if (computerChoice === "ROCK") gameResult("LOSE");
      if (computerChoice === "PAPER") gameResult("WIN");
      break;
  }
};

const gameResult = (result) => {
  const resultMessage = document.getElementById("result");

  switch (result) {
    case "WIN":
      resultMessage.textContent = `YOU ${result}`;
      resultMessage.style.color = "green";
      winCount++;
      break;
    case "LOSE":
      resultMessage.textContent = `YOU ${result}`;
      resultMessage.style.color = "red";
      lossCount++;
      break;
    case "TIE":
      resultMessage.textContent = `YOU ${result}`;
      resultMessage.style.color = "black";
      break;
  }

  if (winCount === 4) {
    resultMessage.textContent = "You are really good!";
    resultMessage.style.color = "green";
    winCount = 0;
    lossCount = 0;
  } else if (lossCount === 4) {
    resultMessage.textContent = "You need practice!";
    resultMessage.style.color = "red";
    lossCount = 0;
    winCount = 0;
  }
};
