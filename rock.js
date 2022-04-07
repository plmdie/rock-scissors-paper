/* Get computer choice randomly */

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'scissors'; 
        case 2: return 'paper';  
    }
}

/* Prompt player for their choice */

function playerPlay() {
    let playerChoice = prompt('Choose with what you want to player, Rock Scissors or Paper:');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

/* Play individual round and return winner */

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock': 
            switch(computerSelection) {
                case 'rock': 
                    console.log('The game is tied, both players choosed Rock.');
                    return 'tie';
                
                case 'scissors': 
                    console.log('The player has won, Rock smashes Scissors.');
                    return 'player';
                
                case 'paper': 
                    console.log('The computer has won, Paper wraps the Rock.');
                    return 'computer';
            }
        case 'scissors': 
            switch(computerSelection) {
                case 'rock': 
                    console.log('The computer has won, Rock smashes Scissors.');
                    return 'computer';
                
                case 'scissors': 
                    console.log('The game is tied, both players choosed Scissors.');
                    return 'tie';
                
                case 'paper': 
                    console.log('The players has won, Scissors cut Paper.');
                    return 'player';
                
            }
        
        case 'paper': 
            switch(computerSelection) {
                case 'rock': 
                    console.log('The player has won, Paper wraps the Rock.');
                    return 'player';
                
                case 'scissors': 
                    console.log('The computer has won,  Scissors cut Paper.');
                    return 'computer';
                
                case 'paper': 
                    console.log('The game is tied, both players choosed Paper.');
                    return 'tie';
                
            }
        
    }
    
}

/* Counting each player score and announce winner */

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        /* Show Round # and players choice */
        console.log(`Round ${i}`);
        console.log(`Player choosed ${playerSelection}`);
        console.log(`Computer choosed ${computerSelection}`);
        
        /* Get result of round */
        let result = playRound(playerSelection, computerSelection);
        /* Count score */
        if (result === 'computer') { computerScore += 1; }
        if (result === 'player') { playerScore += 1; }
        console.log(`Computer Score ${computerScore}`);
        console.log(`Player Score ${playerScore}`);

        /* Stating game victory */ 
        if (i === 5) {
            if (computerScore > playerScore) { console.log(`Computer won the game. ${computerScore} rounds.`); }
            else if (playerScore > computerScore) {
                console.log(`Player won ${playerScore} rounds.`);
                console.log(`round: ${i}`);
            }
            else {console.log(`The game was tied, ${computerScore} vs ${playerScore}.`);}
        }   
    } 
}

game();