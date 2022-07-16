function getComputerChoice(){
    //outputs a random choice between Rock, Paper or Scissors
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            console.log('Rock');
            return('Rock');
            break;
        case 1:
            console.log('Paper');
            return('Paper');
            break;
        case 2:     
            console.log('Scissors');
            return('Scissors');
            break;   
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log('You Lose! Paper beats Rock');        
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log('You Won! Rock beats Scissors');
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log('You Lose! Scissors beats Paper');
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log('You Won! Paper beats Rock');
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log('You Lose! Rock beats Scissors');
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log('You Won! Scissors beats Paper');
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Scissors' || playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper'){
        console.log('Tie! Play again');
    }
}

var playerSelection = 'Paper';
var computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);