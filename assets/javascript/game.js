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
var choice = animals[Math.floor(Math.random() * animals.length)];

// variable to hold empty array that chosen world will be added to.
var answerArray = [];



// for loop to set "_" for each character is chosen word
for (var i = 0; i < choice.length; i++) {
    answerArray[i] = "_";
}


// variable to keep track of letters remaining to be guessed.
var remaining = choice.length;

// variable for wins
var wins = 0;

// variable for letters guessed.
var lettersGuessed = " ";

// variable to hold instructions.
var instructions = " ";

// variable to guesses remaining and set it to 8.
var guessRemaining = 8;





