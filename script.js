function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function firstUpperRestLower(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function play(userChoice, computerChoice) {
    switch (userChoice) {
        case computerChoice:
            return "draw";
        case "Rock": 
            if (computerChoice === "Paper") {
                return "computer";
            }
            if (computerChoice === "Scissors") {
                return "player";
            }
        case "Paper":
            if (computerChoice === "Scissors") {
                return "computer";
            }
            if (computerChoice === "Rock") {
                return "player";
            }
        case "Scissors":
            if (computerChoice === "Rock") {
                return "computer";
            }
            if (computerChoice === "Paper") {
                return "player";
            }
    }
}

function printResult (winner) {
    const results = document.querySelector('#results');
    results.textContent = `This round winner: ${winner}  
    Player: ${playerScore} points
    Computer: ${computerScore} points`;
}

let playerScore = 0;
let computerScore = 0; 
const results = document.querySelector('#results');
printResult("");
//results.textContent = `Player: ${playerScore} points
//Computer: ${computerScore} points`;

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    const thisRound = play ('Rock', getComputerChoice());
    if (thisRound === 'computer') {
        computerScore += 1;
    }
    if (thisRound ==="player") { 
        playerScore += 1 };
    printResult(thisRound);
    });


const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    const thisRound = play ('Paper', getComputerChoice());
    if (thisRound === 'computer') {
        computerScore += 1;
    }
    if (thisRound ==="player") { 
        playerScore += 1 };
    printResult(thisRound);
    });

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    const thisRound = play ('Scissors', getComputerChoice());
    if (thisRound === 'computer') {
        computerScore += 1;
    }
    if (thisRound ==="player") { 
        playerScore += 1 };
    printResult(thisRound);
    });

