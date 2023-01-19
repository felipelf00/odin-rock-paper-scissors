function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}
function play(userChoice, computerChoice) {
    switch (userChoice) {
        case computerChoice:
            return "Draw";
        case "Rock": 
            if (computerChoice === "Paper") {
                return "Computer";
            }
            if (computerChoice === "Scissors") {
                return "Player";
            }
        case "Paper":
            if (computerChoice === "Scissors") {
                return "Computer";
            }
            if (computerChoice === "Rock") {
                return "Player";
            }
        case "Scissors":
            if (computerChoice === "Rock") {
                return "Computer";
            }
            if (computerChoice === "Paper") {
                return "Player";
            }
    }
}

function isGameOver() {
    if (playerScore >= 5 || computerScore >= 5) return true;
}

function gameOver() {
    let champ = ""; 
    playerScore >= 5 ? champ = "Player" : champ = "Computer";
    const body = document.querySelector('body');
    const finalScore = document.createElement('div');
    const restart = document.createElement('button');
    finalScore.classList.add('final');
    restart.classList.add('final');
    restart.id = 'restart-button';
    restart.textContent = 'Play again';
    restart.onclick = () => freshStart(); 
    finalScore.textContent = `Game finished. ${champ} wins.` 
    body.appendChild(finalScore);
    body.appendChild(restart);
}

function printCurrentPlay (winner, playerChoice, computerChoice) {
    if (gameStarted) {
    const arenaDisplay = document.querySelector("#arena-text");
    arenaDisplay.innerHTML = `Player chose ${playerChoice}<br>Computer chose ${computerChoice}`;
    const thisRound = document.querySelector('#this-round');
    if (winner === "Draw") {
        thisRound.textContent = "Draw";
    } else {
        switch (winner) {
            case "Player": thisRound.textContent = `${playerChoice} beats ${computerChoice}`;
            case "Computer": thisRound.textContent = `${computerChoice} beats ${playerChoice}`;
        }
    }
    printScore();
    }
}

function printScore () {
    if (gameStarted) {
        const pScore = document.querySelector('#player-score');
        const cScore = document.querySelector('#computer-score');
        pScore.textContent = "Player: " + playerScore + " points";
        cScore.textContent = "Computer: " + computerScore + " points";
        if (isGameOver()) gameOver();
    }
}


function freshStart () {
    playerScore = 0;
    computerScore = 0;
    gameStarted = false;
    const arenaDisplay = document.querySelector("#arena-text");
    arenaDisplay.textContent = "";
    const thisRound = document.querySelector('#this-round');
    thisRound.textContent = "Make your choice:";

    const pScore = document.querySelector('#player-score');
    const cScore = document.querySelector('#computer-score');
    pScore.textContent = "";
    cScore.textContent = "";

    const final = document.querySelectorAll('.final');
    if(final) {
        final.forEach( final => {
            const body = document.querySelector('body');
            body.removeChild(final);
        })
    }
}

let gameStarted = false;
let playerScore = 0;
let computerScore = 0; 
freshStart();


const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    gameStarted = true;
    if (isGameOver()) return;
    const computerChoice = getComputerChoice();
    const thisRound = play ('Rock', computerChoice);
    if (thisRound === 'Computer') {
        computerScore += 1;
    }
    if (thisRound ==="Player") { 
        playerScore += 1 };
    // console.log(thisRound);
    printCurrentPlay(thisRound, "Rock", computerChoice);
    });


const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    gameStarted = true;
    if (isGameOver()) return;
    const computerChoice = getComputerChoice();
    const thisRound = play ('Paper', computerChoice);
    if (thisRound === 'Computer') {
        computerScore += 1;
    }
    if (thisRound ==="Player") { 
        playerScore += 1 };
    printCurrentPlay(thisRound, "Paper", computerChoice);
    });

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    gameStarted = true;
    if (isGameOver()) return;
    const computerChoice = getComputerChoice();
    const thisRound = play ('Scissors', computerChoice);
    if (thisRound === 'Computer') {
        computerScore += 1;
    }
    if (thisRound ==="Player") { 
        playerScore += 1 };
    printCurrentPlay(thisRound, "Scissors", computerChoice);
    });

