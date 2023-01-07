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
            return(`Draw. Both chose ${userChoice}`);
        case "Rock": 
            if (computerChoice === "Paper") {
                return(`You lose. ${computerChoice} beats ${userChoice}.`);
            }
            if (computerChoice === "Scissors") {
                return(`You win. ${userChoice} beats ${computerChoice}.`);
            }
        case "Paper":
            if (computerChoice === "Scissors") {
                return(`You lose. ${computerChoice} beats ${userChoice}.`);
            }
            if (computerChoice === "Rock") {
                return(`You win. ${userChoice} beats ${computerChoice}.`);
            }
        case "Scissors":
            if (computerChoice === "Rock") {
                return(`You lose. ${computerChoice} beats ${userChoice}.`);
            }
            if (computerChoice === "Paper") {
                return(`You win. ${userChoice} beats ${computerChoice}.`);
            }
        default:
                return("Wrong input")
    }
}


let choice = firstUpperRestLower(prompt("Chose Rock, Paper, Scissors:"));

console.log(play(choice, getComputerChoice()));

