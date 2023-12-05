function getChoices() {
    // create a list array of computer choices
    const options = ['Rock', 'Paper', 'Scissors']
    // getting the computer choices by using math.floor function
    const Choices = Math.floor(Math.random() * options.length);
    // set the computer choices inside the list array
    return options[Choices];
}

// returns the computer choices
// let ComputerSelection = getComputerChoices();
// console.log(ComputerSelection)

// player choices
// let PlayerSelection = "ROCK"
// console.log(PlayerSelection)

// create a function call "match" that has parameters of "ComputerSelection" and "PlayerSelection"
function match(ComputerChoices, PlayerSelection) {
    // turn both string into a lowercase string
    const player = PlayerSelection.toLowerCase();
    const computer = ComputerChoices.toLowerCase();
    const validOptions = ['rock', 'paper', 'scissors']

    // Check if player input is valid
    if (!validOptions.includes(player)) {
        return "Please choose Rock, Paper or Scissors";
    }
    // if condition of both player equal, then tie
    else if (player === computer) {
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
// const result = match(ComputerSelection, PlayerSelection);
// console.log(match(ComputerSelection,PlayerSelection));

function game() {
    // For loop a match 5 times
    let round = 1;
    for (let i = 0; i < 5; i++) {
        // Get Choice 
        let ComputerSelection = getChoices();
        let PlayerSelection = prompt("Please Choose Rock Paper Scissors");
        
        console.log("================================")
        console.log("Round "+ round)
        // Player Selection
        console.log("Player Choose: " + PlayerSelection);
        // Computer Selection
        console.log("Computer Choose: " + ComputerSelection);

        // Match Result
        console.log(match(ComputerSelection,PlayerSelection));


        // Alert box result of that match
        alert ("Round " + round + "\n" +
               "================================" + "\n" +
               "Player Selected: " + PlayerSelection + "\n" +
               "Computer Selected: " + ComputerSelection + "\n" +
               "================================" + "\n" +
               match(ComputerSelection,PlayerSelection))

        round++;
        // console.log("================================")
    }
}
console.log(game());
console.log("Games Ended");