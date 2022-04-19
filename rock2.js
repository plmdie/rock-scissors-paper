const cpuScore = document.querySelector('.cpuScore p');
const playerScore = document.querySelector('.playerScore p');
const btn = document.querySelector('.button');
const btnGame = document.querySelector('.game');
const log = document.querySelector('.message');


let addButtons = 0;
let cpu = 0;
let player = 0;

/* Get computer choice randomly */

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'scissors'; 
        case 2: return 'paper';  
    }
}

/* Play single round */

const playRound = function(playerSelection) {
    let computerSelection = computerPlay(); 

    if (isGameOver()) {
        log.textContent = 'The game is finished, press restart';
        return;
    }

    if (playerSelection === computerSelection) {
        log.textContent = 'The game is tied.';
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            updateScore('player');
        }
    else {
        updateScore('computer');
    }
}   

/* Update score */

function updateScore(winner) {
    if (isGameOver()) return;

    if (winner === 'player') {
        player++;
        playerScore.textContent = player;
       if (!isGameOver()) log.textContent = 'You won!';
    }

    if (winner === 'computer') {
        cpu++;
        cpuScore.textContent = cpu;
        if (!isGameOver()) log.textContent = 'You Lost!';
    }
}

const startGame = function() {
    
    player = 0;
    cpu = 0;
    playerScore.textContent = player;
    cpuScore.textContent = cpu;
    log.textContent = 'Choose wisely!'

    if  (addButtons === 0) {
    addPlayerChoice();
    addButtons = 1;
    }
    btnGame.removeEventListener('click', startGame);
}

const addPlayerChoice = function () {
   
    
    const btn1=document.createElement("BUTTON");
    btn1.className = "rock";
    btn1.textContent = "rock";
    btn.appendChild(btn1);

    const btn2=document.createElement("BUTTON");
    btn2.className = "paper";
    btn2.textContent = 'Paper';
    btn.appendChild(btn2);

    const btn3=document.createElement("BUTTON");
    btn3.className = "scissors";
    btn3.textContent = 'Scissors';
    btn.appendChild(btn3);

    /* Button Rock */
    const btnRock = document.querySelector('.rock');

    btnRock.addEventListener('click', () => playRound("rock"));

    /* Button Paper */
    const btnPaper = document.querySelector('.paper');

    btnPaper.addEventListener('click', () => playRound("paper"));

    /* Button Scissors */
    const btnScissors = document.querySelector('.scissors');

    btnScissors.addEventListener('click', () => playRound("scissors"));

}

function isGameOver() {
    if (player === 5 || cpu === 5) {
        if (player === 5) log.textContent = 'You won the game!';
        else if (cpu === 5) log.textContent = 'You lost the game!';
        btnGame.textContent = 'Restart Game';
        btnGame.addEventListener('click', startGame);
        return true;
    } else {return false;}
}

btnGame.addEventListener('click', startGame);