const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let scoreBoard = document.getElementById("scoreBoard");



const playerSelection = (choice) => {

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (choice === computerChoice) {
        scoreBoard.innerHTML = `Its a tie. Player: ${playerScore} Computer: ${computerScore}`;
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        if (playerScore === 5) {
            scoreBoard.innerHTML = `Player wins. Final score: ${playerScore} to ${computerScore}`;
            return;
        }
        scoreBoard.innerHTML = `Player wins this round. Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        computerScore++;
        if (computerScore === 5) {
            scoreBoard.innerHTML = `Computer wins. Final score: ${computerScore} to ${playerScore}`;
            return;
        }
        scoreBoard.innerHTML = `Computer wins this round. Player: ${playerScore} Computer: ${computerScore}`;
    }
};


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection(e.target.value);
    });
});