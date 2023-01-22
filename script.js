let choices =[ 'rock', 'paper', 'scissors' ]

const getComputerChoice = (params) => {
    //will return a random choice from the choices array
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}
//
console.log('computer selection: ', getComputerChoice())

//set player choice to whatever the user clicks on the dom based on the button values
const playerSelection = 'rock'
const computerSelection = getComputerChoice();

//function to determine the winner
const playRound = (playerSelection, computerSelection) => {
//if player and computer choose the same thing, it's a tie
    if (playerSelection === computerSelection) {
        return 'It\'s a tie'
    }
//if player chooses rock
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock'
        } else {
            return 'You win! Rock beats scissors'
        }
    }
//if player chooses paper
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats paper'
        } else {
            return 'You win! Paper beats rock'
        }
    }
//if player chooses scissors
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors'
        } else {
            return 'You win! Scissors beats paper'
        }
    }


}

//play a round
console.log('Player selection: ' + playerSelection)
console.log(playRound(playerSelection, computerSelection))