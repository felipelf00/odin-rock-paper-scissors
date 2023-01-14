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

function game () {
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        while (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") {
            playerChoice = firstUpperRestLower(prompt("Chose Rock, Paper, Scissors: "));
        }
        let computerChoice = getComputerChoice();
        let winner = play(playerChoice, computerChoice);
        if (winner === "player") {
            playerScore += 1;
            alert(`${playerChoice} beats ${computerChoice}.\nYou won this round.\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
            playerChoice = "";
        }
        if (winner === "computer") {
            computerScore += 1;
            alert(`${computerChoice} beats ${playerChoice}.\nYou lost this round.\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
            playerChoice = "";
        }
        if (winner ==="draw") {
            alert(`Draw. Both players chose ${playerChoice}`);
            playerChoice = "";
        }
    }
    return (`Final score:\nPlayer: ${playerScore} points\nComputer: ${computerScore} points`);
}

alert(game());

//teste: esse comentário só deve aparecer na branch secundária.