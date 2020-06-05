const btn = document.querySelectorAll('button');

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

let playerSelection;

function playerPlay(e) {
  playerSelection = e.target.id;
  game();
}

let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

function game() {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection, computerSelection);
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    if (playerSelection == computerSelection) {
      console.log(`It's a tie: ${playerWins}:${computerWins}`);
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
      console.log("You win!");
      ++playerWins;
      console.log(`player wins: ${playerWins}:${computerWins}`);
    } else {
      console.log("You lose!");
      ++computerWins;
      console.log(`computer wins: ${playerWins}:${computerWins}`)
    }
  }
  console.log(++gameCount);
  if (gameCount >= 5) {
    displayWinner(playerWins, computerWins);
  }
}

function displayWinner(player, computer) {
  if (player > computer) {
    console.log(`Congrats! You win out of 5 games! ${player}:${computer}`)
  } else if (computer > player) {
    console.log(`Sorry, you lost out of 5 games. ${player}:${computer}`);
  } else {
    console.log(`Game over! It's a tie. ${player}:${computer}`);
  }
  gameCount = 0;
  playerWins = 0;
  computerWins = 0;
}



btn.forEach(btn => btn.addEventListener('click', playerPlay));