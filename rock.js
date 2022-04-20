const cpuScore = document.querySelector('#cpuScore p');
const playerScore = document.querySelector('#playerScore p');
const btnGame = document.querySelector('.game');
const score = document.querySelector('#score');
const items = document.querySelector('#items');
const footer = document.querySelector('#footer');
const log = document.querySelector('.message');
const sel = ['rock', 'paper', 'scissors'];
const modal = document.querySelector('.start');
const modalText = document.querySelector('.modal h3');

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
    if (isGameOver() && player === 5) modalEndGame('player'); 
    if (isGameOver() && cpu === 5) modalEndGame('cpu'); 
    if (!isGameOver()) {
        computerSelection = computerPlay(); 

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
    btnGame.style.visibility = 'hidden'
    score.style.display = 'flex';
    items.style.display = 'flex';
    footer.style.display = 'flex';
    if (buttonsAdded === 0) addButtons();
    player = cpu = 0;
    modal.classList.add('modal-hidden');
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
        return true;
    }
    return false;
}

function modalEndGame(winner) {
    modal.classList.remove('modal-hidden');
    score.style.display = 'none';
    items.style.display = 'none';
    footer.style.display = 'none';
    btnGame.style.visibility = 'visible'
    if (winner === 'player') modalText.textContent = 'You won! Press Restart to play again';
    if (winner === 'cpu') modalText.textContent = 'You lost the game! Press Restart to play again';
    btnGame.textContent = 'Restart Game';
}

function modalStart() {
    btnGame.addEventListener('click', startGame);
    modal.classList.remove('modal-hidden');
    items.style.display = 'none';
    score.style.display = 'none';
    footer.style.display = 'none';
    modalText.textContent = "To play this game, select the item under Player score. When you're ready press the start button!";
    setTimeout(() => { btnGame.style.visibility = 'visible'}, 100);
    btnGame.textContent = 'Start Game';
}

window.onload = () => modalStart();


