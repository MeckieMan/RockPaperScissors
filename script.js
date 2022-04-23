
function computerPlay(){
    let choices = ['Rock', 'Paper','Scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}
//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection == playerSelection){
        return ("You Tie")
            }
    else if (computerSelection == 'Paper'){
       return ("You Lose")
    }
    else {
        return("You Win")
    }
}
    const playerSelection = 'Rock';
    const computerSelection = computerPlay();
  
    
  console.log(playRound(playerSelection, computerSelection));
  console.log("Computer Chooses: " +computerSelection);
  console.log("Player Chooses: " +playerSelection);
 
