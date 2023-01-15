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
    const thisRound = document.querySelector('#this-round');
    const pScore = document.querySelector('#player-score');
    const cScore = document.querySelector('#computer-score');
    thisRound.textContent = "This round winner: " + winner;
    pScore.textContent = "Player: " + playerScore + " points";
    cScore.textContent = "Computer: " + computerScore + " points";

    if (playerScore >= 5 || computerScore >= 5) {
        let champ = "";
        playerScore >= 5 ? champ = "Player" : champ = "Computer";
        const body = document.querySelector('body');
        const finalScore = document.createElement('div');
        const restart = document.createElement('button');
        finalScore.classList.add('final');
        restart.classList.add('final');
        restart.textContent = 'Play again';
        restart.onclick = () => freshStart(); 
        finalScore.textContent = `Game finished. ${champ} wins.` 
        body.appendChild(finalScore);
        body.appendChild(restart);
    }
}
let playerScore = 0;
let computerScore = 0; 

function freshStart () {
    playerScore = 0;
    computerScore = 0;
    printResult("");

    const final = document.querySelectorAll('.final');
    if(final) {
        final.forEach( final => {
            const body = document.querySelector('body');
            body.removeChild(final);
        })
    }
}
freshStart();


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

