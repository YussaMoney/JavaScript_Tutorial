const mySpan = document.getElementsByTagName('span');
console.log(mySpan);
let paper = mySpan[1];
console.log(paper.innerHTML);
console.log(paper.style);
paperGreen = paper.style.color = 'blue';
let rock = mySpan[0];
rock.style.color = 'yellow';

let scissors = mySpan[2];
console.log(scissors.getAttribute('class', 'scissors'));
scissors.className = 'text-danger';

// Assigned Value to each Score Variable
let playerScore = 0;
let computerScore = 0;

// Assigned Value to Win, Lose & Tie Variable
const win = 'You Win this game!';
const lose = 'You Lose this game!';
const tie = 'The result is a tie!';

// Assigned computerPlay Function to Variable computerSelection

function getRandomNumber() {
    return Math.random();
}

function compareRandomBy(value) {
    return getRandomNumber() <= value;
}

// Declared computerPlay Function
function computerPlay() {
    if (compareRandomBy(0.2)) {
        const rock = 'Rock';
        return rock.toLowerCase() || rock.toUpperCase() || rock
    } else if (compareRandomBy(0.4)) {
        const paper = 'Paper';
        return paper.toLowerCase() || paper.toUpperCase() || paper
    } else {
        const scissors = 'Scissors';
        return scissors.toLowerCase() || scissors.toUpperCase() || scissors
    }
}

const computerSelection = computerPlay();


// Declared playRound Function
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieScore++;
        return "It's a tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') { computerScore++; return 'You Lose! Paper beats Rock' }
        if (computerSelection === 'scissors') { playerScore++; return 'You Won! Rock beats Scissors' }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') { playerScore++; return 'You Won! Paper beats Rock' }
        if (computerSelection === 'scissors') { computerScore++; return 'You Lose! Scissors beats Paper' }

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') { playerScore++; return 'You Won! Scissors beats Paper' }
        if (computerSelection === 'rock') { computerScore++; return 'You Lose! Rock beats Scissors' }
    } else {
        return 'Error! You\'ve to choose one';
    }
}

// Declared Loop
function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt('Input your choice of "Rock, Paper or Scissors"');
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore + ':' + computerScore);
    }

    if (playerScore === computerScore) {
        alert(tie.toUpperCase());
    } else if (playerScore > computerScore) {
        alert(win.toUpperCase());
    } else {
        alert(lose.toUpperCase());
    }
    alert('GAME OVER');
    return ('');
}

console.log(game());

const myParagraph = document.getElementById('p1');
setTimeout(() => {
    console.log(myParagraph);
    myParagraph.setAttribute('class', 'bg-warning');
}, 5000);