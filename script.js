function getComputerChoice(){
    //outputs a random choice between Rock, Paper or Scissors
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            console.log('Rock');
            break;
        case 1:
            console.log('Paper');
            break;
        case 2:     
            console.log('Scissors');
            break;   
    }
}
getComputerChoice()