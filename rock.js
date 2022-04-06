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