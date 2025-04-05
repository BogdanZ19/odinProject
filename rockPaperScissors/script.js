function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Choice: (rock/paper/scissors)");
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(compChoice, humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        let winner = "";
        //console.log(`computer choice = ${compChoice}`);

        if (compChoice === "rock") {
            if (humanChoice === "scissors") {
                ++computerScore;
            }
            else {
                ++humanScore;
            }
        }

        if (compChoice === "paper") {
            if (humanChoice === "rock") {
                ++computerScore;
            }
            else {
                ++humanScore;
            }
        }

        if (compChoice === "scissors") {
            if (humanChoice === "paper") {
                ++computerScore;
            }
            else {
                ++humanScore;
            }
        }
        console.log(`The choices were human(${humanChoice}), comp(${compChoice})`);
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }

    if (humanScore > computerScore) {
        return "You win";
    }
    return "You lose";

}

console.log(playGame());









