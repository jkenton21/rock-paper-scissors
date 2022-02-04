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

let userChoice = prompt();
let userCharLength = userChoice.length; //get String length to determine selection without case-sensitivity

let winnermessage = "";
if (((compCharLength == 4) && (userCharLength == 5)) || ((compCharLength == 5) && (userCharLength == 8)) | ((compCharLength == 8) && (userCharLength == 4))) {
    winnermessage = "You Win! " + userChoice + " beats " + computerChoice;
}
else if (((compCharLength == 5) && (userCharLength == 4)) || ((compCharLength == 8) && (userCharLength == 5)) | ((compCharLength == 4) && (userCharLength == 8))) {
    winnermessage = "You Lose! " + computerChoice + " beats " + userChoice;
}
else {
    winnermessage = "You Tied!"
}

let yourscore = 0;
let compscore = 0;
if (winnermessage.charAt(4) == "W") {
    yourscore = yourscore + 1;
} else if (winnermessage.charAt(4) == "L") {
    compscore = compscore + 1;
} else {
    yourscore = yourscore;
    compscore = compscore;
}

console.log(winnermessage);
console.log(yourscore);
console.log(compscore);