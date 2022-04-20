
function computerPlay(){
    let choices = ['Rock', 'Paper','Scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}

// console.log(computerPlay());

const playerSelection = 'Rock';
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
     
    if (computerSelection == 'Paper'){
        return ("You Lose")
            }
    
    else if (computerSelection == 'Scissors'){
        return ("You Win")
    }
    
    else{
        return ("You Tie")
    }
  }
  
  console.log("Computer Chooses: " +computerPlay());
  console.log("Player Chooses: " +playerSelection);


  console.log(playRound(playerSelection, computerSelection));