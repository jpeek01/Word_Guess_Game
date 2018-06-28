
var game = {
    gameWords: ["gryffindor","hermione","hogwarts","quidditch","Snape","dumbledore","mcgonagall","longbottom","voldemort","accio","avadakedavra"],
    wordsPlayed: [],
    currentWord: "",
    correctGuesses: 0,
    wordMask: [],
    userGuess: "",
    previousGuesses: [],
    anyKeyCheck: true,
    incorrectGuesses: 3,
    numberOfWins: 0,
    gameNumber: 1,
};

// get a random word from the word array and make it lower case
game.currentWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)].toLowerCase();
    
// create the mask to place on the screen to obsucre the word from the user
for (let i = 0; i < game.currentWord.length; i++) {
    game.wordMask[i] = '_'
}


// capture the user input and run the logic against it
document.onkeyup = function(event) {

    game.userGuess = event.key.toLowerCase(); //  assign the keypress to the object

        if (game.userGuess == 'f5') {

        } else if (game.anyKeyCheck == true) {
            game.anyKeyCheck = false;
            updateScreen();

        } else if (game.incorrectGuesses <= 0) { //check if the user has guesses remaining. end game if they don't

            gameboardUpdate = '<p class="text-center UserMessages"> You lose </p>';
            updateScreen();

            // nextGame ();

        } else if (game.previousGuesses.indexOf(game.userGuess) >= 0) { //check if the user already used a letter by checking the array of used guesses

            alert("You've already guessed that");

            updateScreen();

        } else if (game.currentWord.indexOf(game.userGuess) == -1 && game.incorrectGuesses >= 1) {

            game.incorrectGuesses--;
            
            game.previousGuesses.push(event.key.toLowerCase());
            updateScreen();

        } else if (game.currentWord.indexOf(game.userGuess) >= 0) {

            updateMask(game.wordMask, game.userGuess, game.currentWord);

            game.previousGuesses.push(event.key.toLowerCase());
            updateScreen();

            if (game.correctGuesses == game.currentWord.length) {
                gameboardUpdate = '<p class="text-center UserMessages"> You win </p>';
                updateScreen()
            };
        }
    
        var gameboardUpdate =
        '<p>Game: ' + game.gameNumber + '</p>' +
        '<p>Your word is ' + game.currentWord + '</p>' +
        '<p>Your word is ' + game.wordMask.join("") + '</p>' +
        '<p>Letters guessed: ' + game.previousGuesses + '</p>' +
        '<p>' + game.incorrectGuesses + ' incorrect guesses remaining' + '</p>' +
        '<p>' + game.correctGuesses + ' Correct guesses of ' + game.currentWord.length + '</p>' +
        '<p> You have won ' + game.numberOfWins + ' games.' + '</p>'
        ;

        // updateScreen(html)

    }; // End OnKeyUp event

function updateScreen() {
    
    var html =
    '<p>Game: ' + game.gameNumber + '</p>' +
    '<p>Your word is ' + game.currentWord + '</p>' +
    '<p>Your word is ' + game.wordMask.join("") + '</p>' +
    '<p>Letters guessed: ' + game.previousGuesses + '</p>' +
    '<p>' + game.incorrectGuesses + ' incorrect guesses remaining' + '</p>' +
    '<p> You have won ' + game.numberOfWins + ' games.' + '</p>'
    ;

    document.querySelector("#currentGameDiv").innerHTML = html;
}

function updateMask(wordMask, guess, word) {
    
    var updatedMask = wordMask;

    for (let i = 0; i < word.length; i++) {
       if (word.charAt(i) == guess){
        updatedMask[i] = guess;
        game.correctGuesses++;
       }
    }
    
    return updatedMask;
}

function startGame (game) {
    game.gameWords.splice(games.gameWords.indexOf(game.currentWord),1);
    // game.currentWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)];
    game.incorrectGuesses = 3;
    game.userGuesses = [];
    game.numberOfWins++;
    game.gameNumber++;

    var html =
    '<p>Game ' + game.currentWord + '</p>' +
    '<p>Your word is ' + game.currentWord + '</p>' +
    '<p>Your word is ' + game.wordMask.join("") + '</p>' +
    '<p>Letters guessed: ' + game.userGuesses + '</p>' +
    '<p>' + game.incorrectGuesses + ' incorrect guesses remaining' + '</p>' +
    '<p> You have won ' + game.gameNumber + ' games.' + '</p>'
    ;

    document.querySelector("#currentGameDiv").innerHTML = html;

    alert("Next Game")
}






























