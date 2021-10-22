// Variables
 let playerScore = 0;
 let computerScore = 0;
 let reset = document.querySelector(".reset-button")
 let scoreMessage = document.querySelector(".score-message");
 let playerRound = document.querySelector(".player-score");
 let computerRound = document.querySelector(".computer-score");
 let rockChoice = document.getElementById("rock");
 let paperChoice = document.getElementById("paper");
 let scissorsChoice = document.getElementById("scissors");

// Random Computer Selections
function computerPlay() {
    let selections = ["rock", "paper", "scissors"];
    let random = [Math.floor(Math.random() * selections.length)]
    return selections[random];
}

function choiceWord(selection) {
    if (selection === "rock") return "Rock"
    if (selection === "paper") return "Paper"
    return "Scissors";
}

// Checks for a win
function win(user, computer) {
    let page = document.querySelector(".score-message");
    let styling = document;
    playerRound.innerText = playerScore++;
    page.innerText = `You win! ${choiceWord(user)} beats ${choiceWord(computer)}!`
    styling.getElementById(user).classList.add("green");
    setTimeout(() => styling.getElementById(user).classList.remove("green"), 350)
}

// Checks for a loss
function lose(user, computer) {
    let page = document.querySelector(".score-message");
    let styling = document;
    computerRound.innerText = computerScore++;
    page.innerText = `You lose! ${choiceWord(computer)} beats ${choiceWord(user)}!`
    styling.getElementById(user).classList.add("red");
    setTimeout(() => styling.getElementById(user).classList.remove("red"), 350)
}

// Checks for a draw
function draw(user, computer) {
    let page = document.querySelector(".score-message");
    let styling = document;
    page.innerText = `Its a draw! ${choiceWord(user)} equals to ${choiceWord(computer)}!`
}

function game(user) {
    const computerChoice = computerPlay();
    // Wins
    if (user === "rock" && computerChoice === "scissors") {
        win(user, computerChoice)
    } else if (user === "paper" && computerChoice === "rock") {
        win(user, computerChoice)
    } else if (user === "scissors" && computerChoice === "paper") {
        win(user, computerChoice)
    }

    // Loses
    if (user === "scissors" && computerChoice === "rock") {
        lose(user, computerChoice)
    } else if (user === "rock" && computerChoice === "paper") {
        lose(user, computerChoice)
    } else if (user === "paper" && computerChoice === "scissors") {
        lose(user, computerChoice)
    }

    // Draw
    if (user === "rock" && computerChoice === "rock") {
        draw(user, computerChoice)
    } else if (user === "paper" && computerChoice === "paper") {
        draw(user, computerChoice)
    } else if (user === "scissors" && computerChoice === "scissors") {
        draw(user, computerChoice)
    }

    // Checks for game max wins
    if (playerScore == 6 || computerScore == 6) {
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        reset.style.visibility = "visible";
        if (playerScore > 4) {
            document.getElementById("animation").classList.add("green-anim")
            document.querySelector(".winner-message").innerText = "Player Wins!"
            document.querySelector(".winner-message").style.visibility = "visible"
            reset.addEventListener("click", () => {
                playerScore = 0;
                computerScore = 0;
                playerRound.innerText = 0;
                computerRound.innerText = 0;
                rockChoice.disabled = false;
                paperChoice.disabled = false;
                scissorsChoice.disabled = false;
                document.querySelector(".winner-message").style.visibility = "hidden";
                reset.style.visibility = "hidden";
                document.getElementById("animation").classList.remove("green-anim");
                return;
            })
        } else if (computerScore > 4) {
            document.getElementById("animation").classList.add("red-anim");
            document.querySelector(".winner-message").innerText = "Computer Wins!";
            document.querySelector(".winner-message").style.visibility = "visible";
            reset.addEventListener("click", () => {
                playerScore = 0;
                computerScore = 0;
                playerRound.innerText = 0;
                computerRound.innerText = 0;
                rockChoice.disabled = false;
                paperChoice.disabled = false;
                scissorsChoice.disabled = false;
                document.querySelector(".winner-message").style.visibility = "hidden";
                reset.style.visibility = "hidden";
                document.getElementById("animation").classList.remove("red-anim");
                return;
            })
        }
    }
}

// Choice event listeners
function main() {
    rockChoice.addEventListener("click", () => game("rock"));
    paperChoice.addEventListener("click", () => game("paper"));
    scissorsChoice.addEventListener("click", () => game("scissors"));
}
main()
