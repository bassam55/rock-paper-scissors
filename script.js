const MAXSCORE = 3;
//variables
const actions = ["Rock", "Paper", "Scissors"]
var playerScore = 0;
var computerScore = 0;
var currentRound = 0;

/**
 * Tells the user that the previous game was over and starts a new game
 * 
 * sets the score values to 0
 */
function newGame(){
    const roundResult = document.querySelector(".current-round");
    if(playerScore == MAXSCORE){
        roundResult.innerText = "Player WON! Click any button to start a new GAME"
    }
    if(computerScore == MAXSCORE){
        roundResult.innerText = "Computer WON! Click any button to start a new GAME"
    }
    playerScore = 0, computerScore = 0, currentRound=0;
}
/**
 * updates player score when they win a round
 */
function playerWon(){
    playerScore += 1;
}
/**
 * updates computer score when they win a round
 */
function computerWon(){
    computerScore += 1;
}
//Function To generate a random computer choice from [rock, paper, scissors]
function getComputerChoice(){
    var rand = Math.floor(Math.random()*3)
    return actions[rand];
}
/**
 * Returns the result of 1 round of rps game
 *
 * @param {string} playerSelection, the player choice
 * @param {string} computerSelection, the computer random selection
 * @return {string} a string indicating whether the player or the computer won the the game
 */
function playRound(playerSelection, computerSelection){
    var player = playerSelection.toLowerCase();
    var computer = computerSelection.toLowerCase();
    var flag = 0;

    switch(player){
        case "rock":
            switch(computer){
                case "scissors":
                    flag = 1;
                    break;
                case "paper":
                    flag = 2;
                    break;
                default:
                    flag = 0;
            }
            break;
        case "paper":
            switch(computer){
                case "rock":
                    flag = 1;
                    break;
                case "scissors":
                    flag = 2;
                    break;
                default:
                    flag = 0;
            }
            break;
        case "scissors":
            switch(computer){
                case "paper":
                    flag = 1;
                    break;
                case "rock":
                    flag = 2;
                    break;
                default:
                    flag = 0;
            }
            break;
        default:
            flag = -1;
    }
    switch (flag){
        case 1:
            playerWon();
            return "you win! " + playerSelection + " beats " + computerSelection;
            break;
        case 2:
            computerWon();
            console.log(computerScore);
            return "you Lose! " + computerSelection + " beats " + playerSelection;
            break;
        default:
            return "TIE! Both Choices were "+ computerSelection ;
    }
}

// const playerSelection = "Rock";

//adds event listener to each button and runs the game after the player presses a button
document.querySelectorAll(".button").forEach(button=>{
    button.addEventListener('click', (button)=>{
        updateRound(button.target.id);
    });
})

/**
 * updates the current round string after pressing one of the buttons
 *
 * @param {string} button, the ID (rock, paper, scissors) of the pressed button
 */
function updateRound(button){

    const playerSelection = button;
    var computerSelection = getComputerChoice();
    const roundResult = document.querySelector(".current-round")
    roundResult.innerText =  playRound(playerSelection, computerSelection);
    updateScores();

}

/**
 * updates the Score for both the plyer and Computer

 * Calls newGame() if the max score was reached by one of the players
 */
function updateScores(){
    document.querySelector(".player-score").innerText = playerScore;
    document.querySelector(".computer-score").innerText = computerScore;
    if(playerScore == MAXSCORE || computerScore == MAXSCORE){
        newGame();
    }
}