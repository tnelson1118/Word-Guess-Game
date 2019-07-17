// wait for DOM to load before running script.

window.onload(function() {
    // array of animals to choose from for game.
    var animals = ["pig", "cat", "dog", "tiger", "lion", "bear", "kangaroo", "eagle", "hummingbird", "hamster"];
    // randomly selects an animal from array and sets it to variable randomAnimal.
    var randomAnimal = animals[Math.floor(Math.random() * animals.length)].toLowerCase();

    // variable to hold guesses remaining.
    var guessRemaining = 8;
    document.getElementById("guesses-remaining").innerHTML = guessRemaining;

    // variable to hold number of wins.
    var wins = 0;
    document.getElementById("wins").innerHTML = wins;

    // empty string in variable to hold reset the letters guessed area when game is finished
    var lettersGuessedReset = "";

    // empty array to hold push blanks representing word to.
    var blankAnimal = [];

    // array to push letters to for comparison to users letter.
    var chosenAnimal = [];
    var i;
    
    // loop to add "_" to blankAnimal array for each letter in the randomAnimal chosen
    for (i = 0; i < randomAnimal.length; i++) {
        blankAnimal.push("_");
    }
    document.getElementById("the-word").innerHTML = blankAnimal.join(" ");

    //function to evaluate positions of randomAnimal string.
    function letterInAnimal(letter) {
        // array that will contain the char position in randomAnimal
        var positions = new Array();
        for (i = 0; i < randomAnimal.length; i++) {
            if (randomAnimal[i] === letter) {
                positions.push[i];
            };
        };
        return positions;
    };

    // function to return letters that are still not guessed
    function lettersRemain() {
        var i;
        var toGuess = 0;
        for (i in blankAnimal) {
            if (blankAnimal[i] === "_") {
                toGuess++;
            };
        };
        return toGuess;
    };



    // key up function when key is pressed
    document.onkeyup = function(event) {
        var letter = event.key;
        var lettersGuessed = letter.toLowerCase();
        var i;

        var positions = letterInAnimal(lettersGuessed);

        if (positions.length) {
            for (i = 0; i < positions.length; i++) {
                blankAnimal[positions[i]] = lettersGuessed;
            };

            document.getElementById("the-word").innerHTML = blankAnimal.join(" ");
        } else {
            document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";

            guessesLeft--;
            document.getElementById("guesses-remaining").innerHTML = guessRemaining;
        }

        if (guessRemaining === 0) {
            document.getElementById("instruction").innerHTML = "You lose"
            location.reload();
        }

        if (lettersRemain() == 0) {

            guessRemaining = 8;
            document.getElementById("guesses-remaining").innerHTML = guessRemaining;

            document.getElementById("letters-guessed").innerHTML = lettersGuessedReset;
            randomAnimal = animals[Math.floor(Math.random() * animals.length)].toLowerCase();

            blankAnimal = [];
            for (i = 0; i < randomAnimal.length; i++) {
                blankAnimal.push("_");
            }
            document.getElementById("the-word").innerHTML = blankAnimal.join(" ");

            wins++;
            document.getElementById("wins").innerHTML = wins;
        };
    };
});








