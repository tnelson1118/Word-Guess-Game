// Array of random words and set a variable equal to th random selected word via math.floor math.random.

var animals = [
    "bear",
    "fish",
    "cat",
    "dog",
    "kangaroo",
    "platypus",
    "wolverine",
    "elephant",
    "tiger",
    "lion",
];
var choice;

// variable to hold empty array that chosen world will be added to.
var answerArray = [];
var answer;


// variable to keep track of letters remaining to be guessed.
var remaining;

// variable for wins
var wins = 0;

// variable for letters guessed.
var lettersGuessed = "";

// variable to hold instructions.
var instructions = "Guess A Letter!";

// variable to guesses remaining and set it to 8.
var guessRemaining = 8;



// FUNCTIONs

function chooseWord() {
    choice = animals[Math.floor(Math.random() * animals.length)];
    remaining = choice.length;

    for (var i = 0; i < choice.length; i++) {
        answerArray[i] = "_";
    }

    document.querySelector("#the-word").innerHTML = answerArray;
    document.querySelector("#letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed;
    document.querySelector("#guesses-remaining").innerHTML = "Guesses Remaining: " + guessRemaining;
    document.querySelector("#hide").innerHTML = " ";
    document.querySelector("#instruction").innerHTML = instructions;
}

function updateScore() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}


document.onkeyup = function(event) {
    chooseWord();
    updateScore();
}









