function getComputerChoice(){
    //outputs a random choice between Rock, Paper or Scissors
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            console.log('Rock');
            return('Rock');
        case 1:
            console.log('Paper');
            return('Paper');
        case 2:     
            console.log('Scissors');
            return('Scissors'); 
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'Paper'){
        window.alert('You Lose! Paper beats Rock');        
    }
    else if(playerSelection == 'rock' && computerSelection == 'Scissors'){
        window.alert('You Won! Rock beats Scissors');
    }
    else if(playerSelection == 'paper' && computerSelection == 'Scissors'){
        window.alert('You Lose! Scissors beats Paper');
    }
    else if(playerSelection == 'paper' && computerSelection == 'Rock'){
        window.alert('You Won! Paper beats Rock');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Rock'){
        window.alert('You Lose! Rock beats Scissors');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Paper'){
        window.alert('You Won! Scissors beats Paper');
    }
    else if(playerSelection == 'scissors' && computerSelection == 'Scissors' || playerSelection == 'rock' && computerSelection == 'Rock' || playerSelection == 'paper' && computerSelection == 'Paper'){
        window.alert('Tie! Play again');
    }
}

function getValueAndPlay(){
    var playerSelection = document.getElementById("myOption").value;
    console.log(playerSelection);
    var computerSelection = getComputerChoice();
    playRound(playerSelection.toLowerCase(), computerSelection);
}

