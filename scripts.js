function getComputerChoices () {
    // create a list array of computer choices
    const options = ['Rock', 'Paper', 'Scissors']
    // getting the computer choices by using math.floor function
    const ComputerChoices = Math.floor(Math.random() * options.length);
    // set the computer choices inside the list array
    return options[ComputerChoices];
}
// returns the computer choices
const ComputerSelection = getComputerChoices(); 
// console.log(ComputerSelection)

// player choices
const PlayerSelection = "ROCK"
// console.log(PlayerSelection)

// create a function call "match" that has parameters of "ComputerSelection" and "PlayerSelection"
function match(ComputerChoices, PlayerSelection) {
    // turn both string into a lowercase string
    const player = PlayerSelection.toLowerCase();
    const computer = ComputerChoices.toLowerCase();

    // if condition of both player equal, then tie
    if (player === computer) {
        return "It's a tie ! both chose " + PlayerSelection;
    }
    // if both player are different condition, then the player win
    else if (
        (player === 'rock' && computer === 'scissors') ||
        (player ==='scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return "You win! you chose " + PlayerSelection;
    } 
    // else, the player lose
    else {
        return "You lose! you chose " + PlayerSelection;
    }
}

// return the result of that match
const result = match(ComputerSelection, PlayerSelection);
console.log(match(ComputerSelection,PlayerSelection));
