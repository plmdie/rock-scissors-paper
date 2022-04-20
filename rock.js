const cpuScore = document.querySelector('#cpuScore p');
const playerScore = document.querySelector('#playerScore p');
const btnGame = document.querySelector('.game');
const log = document.querySelector('.message');
const sel = ['rock', 'paper', 'scissors'];

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

/* Animate cpu choice items */

function animateCpuButtons(cpuChoice) {
    const element = document.querySelector(`#cpuButtons .${sel[cpuChoice]}`);
    element.classList.add(`animation`);
    setTimeout(() => { element.classList.remove(`animation`)}, 500);
}

/* Animate a element */

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
    if (winner === 'player') {
        const pScore = document.querySelector('#playerScore p');
        player++;
        pScore.style.color = 'rgb(230, 212, 114)';
        playerScore.textContent = player;
        log.textContent = 'You won!';
        setTimeout(() => { pScore.style.color = 'rgb(247, 243, 223)'}, 600);
    }
    else if (winner === 'computer') {
        const pcScore = document.querySelector('#cpuScore p');
        cpu++;
        pcScore.style.color = 'rgb(230, 212, 114)';
        cpuScore.textContent = cpu;
        log.textContent = 'You Lost!';
        setTimeout(() => { pcScore.style.color = 'rgb(247, 243, 223)'}, 600);
    }
}

/* Start a new game */

const startGame = function() {
    if (buttonsAdded === 0) addButtons();
    player = cpu = 0;
    document.querySelector(`button.game`).style.visibility = "hidden";
    playerScore.textContent = player;
    cpuScore.textContent = cpu;      
    log.textContent = 'Choose wisely!';
}

/* Add player/computer items "buttons" */

const addButtons = function () {
   
    const btnPlayer = document.querySelectorAll('#playerButtons, #cpuButtons'); 
    btnPlayer.forEach(el => {
        sel.forEach(item => {
            const items = document.createElement("div");
            
            items.className = `${item}`;
            el.appendChild(items);
            el.querySelector(`.${item}`).style.backgroundImage = `url('./img/${item}.png')`;
            
            if (el.id === 'playerButtons') {
            document.querySelector(`#playerButtons .${item}`).addEventListener('click', () => playRound(`${item}`));
            }
        });
    });

    buttonsAdded = 1; 
} 

/* Check if game is over */

function isGameOver() {
    if (player === 5 || cpu === 5) {
        if (player === 5) log.textContent = 'You won the game!';
        else if (cpu === 5) log.textContent = 'You lost the game!';
        btnGame.textContent = 'Restart Game';
        document.querySelector(`button.game`).style.visibility = "visible";
        btnGame.addEventListener('click', startGame);
        return true;
    }
    return false;
}

window.onload = () => startGame();
