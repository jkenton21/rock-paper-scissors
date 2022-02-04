// * Rock, Paper, Scissors JavaScript File

// computerPlay function will return random string when it computes
// random string possibilities: "Rock", "Paper", "Scissors"

function computerPlay() {
        let compChoice = Math.random(); //random number 0 - 1.00

        if (compChoice < .34) {
            compChoice = "ROCK";
        } else if (compChoice <= .67) {
            compChoice = "PAPER"
        } else {
            compChoice = "SCISSORS"
        };

        return(compChoice); //returns computer selection
} 

let computerChoice = computerPlay();
let compCharLength = computerChoice.length; //get String length to determine selection without case-sensitivity

let userChoice = "Rock";
let userCharLength = userChoice.length; //get String length to determine selection without case-sensitivity

console.log(userCharLength);