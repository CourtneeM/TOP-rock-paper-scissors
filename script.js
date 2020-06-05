const btn = document.querySelectorAll('button');
const resultsDiv = document.createElement('div');
const currentPlay = document.createElement('div');
const main = document.querySelector('main');
const p = document.createElement('p');

let playerSelection;
let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

main.appendChild(currentPlay);

function computerPlay() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}  

function playerPlay(e) {
  playerSelection = e.target.id;
  game();
}

function game() {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection, computerSelection);
  resultsDiv
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    if (playerSelection == computerSelection) { 
      // Leave empty so it will add to gameCount
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
      ++playerWins;
    } else {
      console.log("You lose!");
      ++computerWins;
    }
  }
  currentPlay.id = "results";
  currentPlay.textContent = `[${playerSelection}] vs. [${computerSelection}]`;
  ++gameCount;
  displayResults();
}

function displayWinner(player, computer) {
  const p = document.createElement('p');
  if (player > computer) {
    p.textContent = "Congrats! You win out of 5 games!";
  } else if (computer > player) {
    p.textContent = "Sorry, you lost out of 5 games.";
  } else {
    p.textContent = "Game over! It's a tie.";
  }
  resultsDiv.appendChild(p);
  gameCount = 0;
  playerWins = 0;
  computerWins = 0;
}

function displayResults() {
  resultsDiv.textContent = `[Player Wins: ${playerWins}] [Computer Wins: ${computerWins}] [Games Played: ${gameCount}]`;
  resultsDiv.id = "results";
  main.appendChild(resultsDiv);
  if (gameCount >= 5) {
    displayWinner(playerWins, computerWins);
  }
}

btn.forEach(btn => btn.addEventListener('click', playerPlay));