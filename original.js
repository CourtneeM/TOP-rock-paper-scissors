function computerPlay() {
  const computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}   

function game() {
  const playerSelection = prompt(`Choose "rock", "paper" or "scissors" to begin. There will be 5 rounds total.`);
  const computerSelection = computerPlay();
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection, computerSelection);
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
      if (playerSelection == computerSelection) {
        console.log("It's a tie!");
      } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        console.log("You win!");
      } else {
        console.log("You lose!");
      }
    } else {
      console.log("That's not a play option. Try again with, `rock, paper, or scissors`");
    }
  }
  playRound(playerSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
  game();
}
alert("Check the console for results.");