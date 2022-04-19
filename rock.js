const cpuScore = document.querySelector('#cpuScore p');
const playerScore = document.querySelector('#playerScore p');

const btnGame = document.querySelector('.game');
const log = document.querySelector('.message');
const sel = ['rock', 'paper', 'scissors'];

let run = 1;


let cpu = 0;
let player = 0;
let buttonsAdded = 0;
/* Get computer choice randomly */

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    animateCpuButtons(computerChoice);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'paper'; 
        case 2: return 'scissors';  
    }
}

function animateCpuButtons(cpuChoice) {
    const element = document.querySelector(`#cpuButtons .${sel[cpuChoice]}`);
    element.classList.add(`animation`);
    setTimeout(() => { element.classList.remove(`animation`)}, 500);
}

function animateElement(element) {
    const el = document.querySelector(element)
    console.log(element);
    el.classList.add(`animation`);
    setTimeout(() => { el.classList.remove(`animation`)}, 500);
}

/* Play single round */

const playRound = function(playerSelection) {
    if (!isGameOver()) {
        computerSelection = computerPlay(); 
        let winner;

        if (playerSelection === computerSelection) {
            log.textContent = 'The game is tied.';
        } 
        else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper') {
                updateScore('player');
                animateElement('#playerScore');
            }
        else {
            updateScore('computer');
            animateElement('#cpuScore');
        }
    } 
    
    isGameOver();
}   

/* Update score */

function updateScore(winner) {
   
   // if (!isGameOver()) {
        
        if (winner === 'player') {
            player++;
            playerScore.textContent = player;
            log.textContent = 'You won!';
        }
        else if (winner === 'computer') {
            cpu++;
            cpuScore.textContent = cpu;
            log.textContent = 'You Lost!';
        }
  //  }
}

const startGame = function() {
    if (buttonsAdded === 0) addButtons();
    player = cpu = 0;
    playerScore.textContent = player;
    cpuScore.textContent = cpu;
    log.style.fontSize = "12vh";        
    log.textContent = 'Choose wisely!';
}

const addButtons = function () {
   
    const btnPlayer = document.querySelectorAll('#playerButtons, #cpuButtons');
    let i = 0;   
    btnPlayer.forEach(el => {
        i++; 
        sel.forEach(item => {
            const items = document.createElement("div");
            
            items.className = `${item}`;
            el.appendChild(items);

            el.querySelector(`.${item}`).style.backgroundImage = `url('./img/${item}.png')`;
            
            //fazer modificação aqui
            if (i === 1) {
            document.querySelector(`#playerButtons .${item}`).addEventListener('click', () => playRound(`${item}`));
            }
        });
    });

    buttonsAdded = 1; 
} 


function isGameOver() {
    if (player === 5 || cpu === 5) {
        if (player === 5) log.textContent = 'You won the game!';
        else if (cpu === 5) log.textContent = 'You lost the game!';
        btnGame.textContent = 'Restart Game';
        btnGame.addEventListener('click', startGame);
        return true;
    }
    return false;
}

startGame();