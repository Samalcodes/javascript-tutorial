const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "It's a draw!";
    }
    if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        userScore++;
        userScoreEl.textContent = userScore;
        return "You win!";
    } else {
        compScore++;
        compScoreEl.textContent = compScore;
        return "Computer wins!";
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const compChoice = getComputerChoice();
        const resultMessage = determineWinner(userChoice, compChoice);
        msg.textContent = `You chose ${userChoice}, Computer chose ${compChoice}. ${resultMessage}`;
    });
});