//Function To generate a random 
const actions = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    var rand = Math.floor(Math.random()*3)
    return actions[rand];
}

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
            return "TIE " ;
    }
}

const playerSelection = "Rock";
for(let i = 0; i < 5; i++){
    var computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

//adds event listener to each button and runs the game after the player presses a button
document.querySelectorAll(".button").forEach(button=>{
    button.addEventListener('click', ()=>{
    const playerSelection = button.id;
    for(let i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("GAME OVER");
    })
})
