const btnChoices = document.querySelector('#btnChoices')
const btnReset = document.querySelector('#btnReset')

const gameLog = document.querySelector('#gameLog')
const gameResult = document.querySelector('#gameResult')
const gameLimit = document.querySelector('#gameLimit')
const gameAnnouncer = document.querySelector('#gameAnnouncer')
const gameStatus = document.querySelector('#gameStatus')

let roundCount = 1;
let roundStatus = "Tie";
let pScore = 0;
let cScore = 0;

// Play
btnChoices.addEventListener('click', (e) => {

    if (pScore == 5 || cScore == 5) {
       gameReset()
    } else if (e.target.id !== btnChoices.id) {
        let pChoices = e.target.textContent;
        game(getChoice(), pChoices, match);
    }

    // console.log(`Player: ${pScore}, Computer: ${cScore}`)
})

// Reset
btnReset.addEventListener('click', (e) => {
    gameReset()
})

// Computer Choice
function getChoice() {
    // create a list array of computer choices
    const options = ['Rock', 'Paper', 'Scissors']
    // getting the computer choices by using math.floor function
    const Choices = Math.floor(Math.random() * options.length);
    // set the computer choices inside the list array
    return options[Choices];
}

// create a function call "match" that has parameters of "ComputerSelection" and "PlayerSelection"
function match(ComputerChoices, PlayerSelection) {
    // turn both string into a lowercase string
    const player = PlayerSelection.toLowerCase();
    const computer = ComputerChoices.toLowerCase();

    // if condition of both player equal, then tie
    if (player === computer) {
        roundStatus = "Tie";
        return "It's a tie! both choose " + PlayerSelection;
    }
    // if both player are different condition, then the player win
    else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        pScore++;
        roundStatus = "Win"
        return "You win! you choose " + PlayerSelection;
    }
    else {
        cScore++;
        roundStatus = "Lose"
        return "You lose! you choose " + PlayerSelection;
    }
}

// return the result of that match
// const result = match(ComputerSelection, PlayerSelection);
// console.log(match(ComputerSelection,PlayerSelection));

function game(computer, player, callback) {
    let round = callback(computer, player);
    let color = "none"
    if (roundStatus === "Tie") {
        color = 'yellow';
    } else if (roundStatus === "Win") {
        color = "lightgreen";
    } else {
        color = "red";
    }
    gameResult.textContent = round;
    gameResult.style.backgroundColor = color;

    const list = document.createElement('li')
    list.textContent = `Round ${roundCount}: ${round}`;
    list.style.backgroundColor = color;

    gameLog.appendChild(list)

    gameLimit.textContent = `${roundCount}`
    gameStatus.textContent = `Player: ${pScore}, Computer: ${cScore}`

    roundCount++;

    if (cScore === 5) {
        gameAnnouncer.style.backgroundColor = "red";
        gameAnnouncer.textContent = "Computer Win, Try Again!";
    } else if (pScore === 5) {
        gameAnnouncer.style.backgroundColor = "lightgreen";
        gameAnnouncer.textContent = "Player Win, Congrats!";
    }
}

function gameReset() {
    roundCount = 1;
    pScore = 0;
    cScore = 0;

    gameLog.innerHTML = '';
    gameStatus.textContent = `Player ${pScore}, Computer ${pScore}`;
    gameResult.innerHTML = `Game Reset!`;
    gameResult.style.backgroundColor = 'cyan';
    gameAnnouncer.textContent = ``;
    gameLimit.textContent = `0`;
}