function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your selection");
    if(humanChoice === null){
        alert("Please enter your choice : Rock, paper or scissors");
        return getHumanChoice();
    }

    humanChoice = humanChoice.toLowerCase();

   
    
    if(humanChoice === "rock" || 
        humanChoice === "paper" || 
        humanChoice === "scissors"
        ){        
        return humanChoice

    }else{
        alert("Please enter your choice : Rock, paper or scissors");
        return getHumanChoice();
    }
    
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        console.log(`Round ${i}`);
        const human = getHumanChoice();
        const computer = getComputerChoice();

        playRound(human, computer);
    }

    function playRound(human, computer){
    console.log(`Human Choice : ${human}`);
    console.log(`Computer Choice : ${computer}`);

    if(human === computer){
        console.log("It's Tie");
        alert("It's Tie");
        return
    }
    
    switch(human){
        case "rock":
            if(computer === "scissors"){
                humanScore++;
                alert("You Win Rock beats Scissors");
            }else if(computer === "paper"){
                computerScore++;
                alert("You Lose Paper beats Rock");
            }
            break;
        case "paper":
            if(computer === "rock"){
                humanScore++;
                alert("You Win Paper beats Rock");
            }else if(computer === "scissors"){
                computerScore++;
                alert("You Lose Scissors beats Paper");
            }
            break;
        case "scissors":
            if(computer === "paper"){
                humanScore++;
                alert("You Win Scissors beats Paper");
            }else if(computer === "rock"){
                computerScore++;
                alert("You Lose Rock beats Scissors");
            }
            break;
    }
    alert(`Human : ${human} \nComputer : ${computer}\nHuman Score : ${humanScore}\nComputer Score : ${computerScore}`);

    }
    function winnerCheck(){
    if(humanScore > computerScore){
        alert("You Win the game");
    }else if(humanScore === computerScore){
        alert("The Game is Tie!")
    }else{
        alert("You Lose the game");
        }
    }

    winnerCheck()
}

playGame();