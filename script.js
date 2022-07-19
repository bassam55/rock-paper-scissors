//Function To generate a random 
const actions = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
    var rand = Math.floor(Math.random()*3)
    console.log(actions[rand]);
}
