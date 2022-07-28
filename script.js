//Function To generate a random 
const actions = ["Rock", "Paper", "Scissors"]
var playerScore = 0;
var computerScore = 0;
var currentRound = 0;
function newGame(){
    playerScore, computerScore, currentRound=0;
}
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
            return "you win! " + playerSelection + " beats " + computerSelection;
            break;
        case 2:
            return "you Lose! " + computerSelection + " beats " + playerSelection;
            break;
        default:
            return "TIE! Both Choices were "+ computerSelection ;
    }
}

const playerSelection = "Rock";
// for(let i = 0; i < 5; i++){
//     var computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// }

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
    console.log(playRound(playerSelection, computerSelection));
    const roundResult = document.querySelector(".current-round")
    roundResult.innerHTML =  playRound(playerSelection, computerSelection);
}