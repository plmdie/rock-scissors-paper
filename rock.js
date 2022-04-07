function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'scissors'; 
        case 2: return 'paper';  
    }
}

function playerPlay() {
    let playerChoice = prompt('Choose with what you want to player, Rock Scissors or Paper:');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

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