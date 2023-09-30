const btnStart = document.querySelectorAll('[data-play]');
const btnIcons = document.querySelectorAll('[data-id]');
const gameContainer = document.getElementById('start-game');
const menuGame = document.getElementById('menu');
const playerX = document.getElementById('player-x');
const playerO = document.getElementById('player-o');
const resultsX = document.getElementById('resultX');
const resultsO = document.getElementById('resultO');
const resultsTie = document.getElementById('resultTie');
const btnRestart = document.getElementById('button-restart');
const cells = document.querySelectorAll('[data-celula]');
const btnTurn = document.getElementById('game-turn');
const dialog = document.getElementById('dialog');
const dialogBtn = document.querySelector('.game__winner-container');
const btnQuit = document.querySelector('.btn-quit');
const btnNextRound = document.querySelector('.btn-nextRound');

let playerOne;
let playerComputer;
let whoseTurn = 'X';
let winMessage;
let victory;
let gameAgainstPc = false;

const x = `
<div class="icon-x-gameplay X" >
<img src="assets/img/icon-X.svg" alt="X" class='X'>
</div>
`
const o = `
<div class="icon-o-gameplay O">
<img src="assets/img/icon-O.svg" alt="O" class='O'>
</div>
`

const victoryConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

btnIcons.forEach(button => button.addEventListener('click', definePlayer));

function definePlayer(button){
    button.target.getAttribute('data-btn') === 'x' ? playerOne = 'X' : playerOne = 'O';
    
    btnIcons.forEach(button => button.removeEventListener('click', definePlayer));

    btnStart.forEach(button => button.addEventListener('click', function(event) {
        startGame(playerOne, event.target.dataset.play);
    }));
}

function startGame(player, typeOfGame){
    if(typeOfGame === 'pvp'){
        gameContainer.style.display = 'grid';
        menuGame.style.display = 'none';
        if(player === 'X'){
            playerX.textContent = 'X (P1)';
            playerO.textContent = 'O (P2)';
        } else {
            playerX.textContent = 'X (P2)';
            playerO.textContent = 'O (P1)';
        }
        playerVersusPlayer();
    } else {
        gameContainer.style.display = 'grid';
        menuGame.style.display = 'none';
        if(player === 'X'){
            playerX.textContent = 'X (Você)';
            playerO.textContent = 'O (CPU)';
            playerComputer = 'O';
        } else {
            playerX.textContent = 'X (CPU)';
            playerO.textContent = 'O (Você)';
            playerComputer = 'X';
        }
        gameAgainstPc = true;
        playerVersusComputer(playerComputer);
    }
}

function playerVersusPlayer(){
    cells.forEach(element => element.addEventListener('click', insertPlay));
}

function insertPlay(event){
    if(whoseTurn === 'X'){
        event.target.innerHTML = x;
        event.target.classList.add('X');
        event.target.removeEventListener('click', insertPlay);
        btnTurn.textContent = 'Vez do Jogador O';
        whoseTurn = 'O';
        verifyVictory('X');
        return;
    }
    if(whoseTurn === 'O'){
        event.target.innerHTML = o;
        event.target.classList.add('O');
        event.target.removeEventListener('click', insertPlay);
        btnTurn.textContent = 'Vez do Jogador X';
        whoseTurn = 'X';
        verifyVictory('O');
        return;
    }
}

function playerVersusComputer(playerCPU){
    cells.forEach(element => element.addEventListener('click', insertPlayVersusComputer));
    if(playerCPU === 'X'){
        setTimeout(() => {
            gameAI(x, 'X', 'O')
        }, 1000);
        btnTurn.textContent = 'Vez do Computador';
        whoseTurn = 'O';
    }

    if(playerCPU === 'O'){
        btnTurn.textContent = 'É a sua vez';      
        whoseTurn = 'X';  
    }  
}

function restartGameVersusComputer(turn){
    cells.forEach(element => element.addEventListener('click', insertPlayVersusComputer));
    if(turn === 'O' && playerComputer === 'O'){
        setTimeout(() => {
            gameAI(o, 'O', 'X')
        }, 1000);
        btnTurn.textContent = 'Vez do Computador';
    } else if ((turn === 'O' && playerComputer === 'X') || (turn === 'X' && playerComputer === 'O')){
        btnTurn.textContent = 'É a sua vez';      
    } else if (turn === 'X' && playerComputer === 'X'){
        setTimeout(() => {
            gameAI(x, 'X', 'O')
        }, 1000);
        btnTurn.textContent = 'Vez do Computador';
    } 
}

function insertPlayVersusComputer(event){
    if(whoseTurn = 'X' && playerComputer === 'O'){
        event.target.innerHTML = x;
        event.target.classList.add('X');
        event.target.removeEventListener('click', insertPlayVersusComputer);
        btnTurn.textContent = 'Vez do Computador';
        verifyVictory('X'); 
        whoseTurn = 'O';
        if(victory) return;
        setTimeout(() => {
            gameAI(o, 'O', 'X')
        }, 1000);
        return;
    } else {
        event.target.innerHTML = o;
        event.target.classList.add('O');
        event.target.removeEventListener('click', insertPlayVersusComputer);
        btnTurn.textContent = 'Vez do Computador';
        verifyVictory('O');
        whoseTurn = 'X';
        if(victory) return;
        setTimeout(() => {
            gameAI(x, 'X', 'O')
        }, 1000);
        return;
    }
}

function gameAI(icon, letter, whosNext){
    const availableCells = [];
    cells.forEach(element => {
        if(!element.classList.contains('X') && !element.classList.contains('O')){
            availableCells.push(element);
        }
    })

    let computerMovement = parseInt(Math.random() * availableCells.length);

    availableCells.forEach(element => {
        let number = parseInt(availableCells.indexOf(element))
        if(number === computerMovement){
            element.innerHTML = icon;
            element.classList.add(letter);
            element.removeEventListener('click', insertPlayVersusComputer);
            btnTurn.textContent = 'É a sua vez';
            whoseTurn = whosNext;
            verifyVictory(letter);
            return;
        }
})
}

function verifyVictory(turn){
    victory = victoryConditions.some((element) => {
         return element.every((index) => {
             return cells[index].classList.contains(turn);
         })
     })

    if(victory && !(playerComputer)){
        turn === playerOne ? winMessage = 'Jogador 1 ganhou!' : winMessage = 'Jogador 2 ganhou!';
        showWinner(turn, winMessage);  
        updateResults(turn);
        gameOver();       
    }

    if(victory && playerComputer){
        turn === playerOne ? winMessage = 'Você ganhou!' : winMessage = 'Você perdeu.';
        showWinner(turn, winMessage);  
        updateResults(turn);
        gameOver();
    }

    if(checkTie() && !victory) {
        updateResults();
        showTie();
        gameOver();
    }
    
    return victory;
}

function checkTie(){
    let x = 0;
    let o = 0;
    cells.forEach(element => {
        if(element.classList.contains('X')){
            x += 1;
        } else if(element.classList.contains('O')){
            o += 1;
        }
    })

    return x + o === 9;
}

function showWinner(winner, message){
    dialog.showModal();
    dialog.innerHTML = ` 
    <div class="game__winner-container">
        <p class="game__winner-title">${message}</p>
        <div class="game__winner-round">
            <img src="assets/img/icon-${winner}.svg" alt="${winner}">
            <p class="game__winner-${winner}">ganhou esta rodada</p>
        </div>    
        <div class="game__btn">
            <button type="button" class="btn-quit" onclick="quit()">Sair</button>
            <button type="button" class="btn-nextRound" onclick="nextRound()">Próxima rodada</button>
        </div>
    </div> 
    `
}

function showTie(){
    dialog.showModal();
    dialog.innerHTML = ` 
    <div class="game__winner-container">
        <p class="game__tie-title">Empate</p>
        <div class="game__btn">
            <button type="button" class="btn-quit" onclick="quit()">Sair</button>
            <button type="button" class="btn-nextRound" onclick="nextRound()">Próxima rodada</button>
        </div>
    </div> 
    `
}

function updateResults(winner){
    if(winner === 'X'){
        let result = parseInt(resultsX.textContent);
        result += 1;
        resultsX.textContent = result;
    } else if(winner === 'O'){
        let result = parseInt(resultsO.textContent);
        result += 1;
        resultsO.textContent = result;
    } else {
        let result = parseInt(resultsTie.textContent);
        result += 1;
        resultsTie.textContent = result;
    }
}

function quit(){
    dialog.close();
    window.location.reload();
}

function nextRound(){
    dialog.close();
    if(gameAgainstPc){
        restartGameVersusComputer(whoseTurn);
    } else {  
        playerVersusPlayer();
    }
}

function gameOver(){
    cells.forEach(element => {
        element.innerHTML = '';
        element.classList.remove('X');
        element.classList.remove('O');
        element.classList.remove('hoverX');
        element.classList.remove('hoverO');
        element.removeEventListener('click', insertPlay);
        element.removeEventListener('click', insertPlayVersusComputer);
    })
}

btnRestart.addEventListener('click', () => window.location.reload());

cells.forEach(element => element.addEventListener('mouseover', mouseoverHover));
function mouseoverHover(e){
    if(e.target.classList.contains('X') || e.target.classList.contains('O')){
        return;
    } else {
        if (whoseTurn === 'X'){
            e.target.classList.add('hoverX');
            setTimeout(() => {
                e.target.classList.remove('hoverX');
            }, 1000)
        } 
        if(whoseTurn === 'O'){
            e.target.classList.add('hoverO');
            setTimeout(() => {
                e.target.classList.remove('hoverO');
            }, 1000)
        }
    }
}
cells.forEach(element => element.addEventListener('mouseout', mouseleaveHover));
function mouseleaveHover(e){
    if (whoseTurn === 'X'){
        e.target.classList.remove('hoverX');
    } 
    if(whoseTurn === 'O'){
        e.target.classList.remove('hoverO');
    }
}