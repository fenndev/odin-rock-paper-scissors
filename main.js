/* Global Variables */
let playerWins = 0;
let computerWins = 0;
let gameRuns = 0;

/* DOM Objects */

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let playerSelectionDisplay = document.querySelector(".player-selection");
let computerSelectionDisplay = document.querySelector(".computer-selection");
let resultsDisplay = document.querySelector(".results");

/* Event Listeners */

rockButton.addEventListener('click', () => {
    playRound('rock');
});
paperButton.addEventListener('click', () => {
    playRound('paper');
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});

/* Game Logic */

function playRound(userSelection) {
    console.log(compareSelections(userSelection, computerPlay()));
    gameRuns++;
}

function computerPlay() {
    let selection = randomPick(0, 2);
    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function compareSelections(playerChoice, cpuChoice) {
    if(playerChoice == 'rock') {
        switch (cpuChoice) {
            case 'rock':
                return "It was a tie!";
            case 'paper':
                computerWins++;
                return "You lose! Paper beats Rock.";
            default:
                playerWins++;
                return "You won! Rock beats Scissors.";
        }
    }
    else if(playerChoice == 'paper') {
        switch (cpuChoice) {
            case 'rock':
                playerWins++;
                return "You won! Paper beats Rock.";
            case 'paper':
                return "It was a tie!";
            default:
                computerWins++;
                return "You lose! Scissors beats Paper.";
        }
    }
    else {
        switch (cpuChoice) {
            case 'rock':
                computerWins++;
                return "You lose! Rock beats Paper.";
            case 'paper':
                playerWins++;
                return "You won! Scissors beats Paper.";
            default:
                return "It was a tie!";
        }
    }
}

function determineWinner() {
    if(playerWins > computerWins) {
        playAgain(true);
        }
    else {
        playAgain(false);
    }
}

function playAgain(playerWon) {
    let playAgain;
    if(playerWon == true) {
        playAgain = confirm("You won! Want to play again?");
    }
    else {
        playAgain = confirm("You lost! Want to play again?");
    }

    if(playAgain) {
        playerWins = 0;
        computerWins = 0;
        gameRuns++;
        console.clear();
        game();
    }
}

function randomPick(limitOne, limitTwo) {
    let pickNumber = Math.floor(Math.random() * (limitTwo - limitOne + 1) + limitOne);
    return pickNumber;
}