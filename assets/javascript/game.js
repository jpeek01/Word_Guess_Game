var game = {
    gameWords: ["gryffindor","hermione","hogwarts","quidditch","Snape","dumbledore","mcgonagall","longbottom","voldemort","accio","avadakedavra"],
    currentWord: "",
    correctGuesses: 0,
    wordMask: [],
    userGuess: "",
    previousGuesses: [],
    anyKeyCheck: true,
    incorrectGuesses: 3,
    incorrectGuessesRemaining: 3,
    numberOfWins: 0,
    gameNumber: 1,
};


// capture the user input and run the logic against it
document.onkeyup = function(event) {

    game.userGuess = event.key.toLowerCase(); //  assign the keypress to the object

        if (game.userGuess == 'f5') {
            console.log('f5 check');
            game.anyKeyCheck = true;
            
        } else if (game.anyKeyCheck == true) {
            console.log('anykey check');
            game.anyKeyCheck = false;
            startGame(game);

        } else if (game.previousGuesses.indexOf(game.userGuess) >= 0) { //check if the user already used a letter by checking the array of used guesses
            console.log('previous guess check');

            updateScreen(game);

        } else if (game.currentWord.indexOf(game.userGuess) == -1 ) { //Check if the letter is correct
            console.log('wrong letter check ' + game.incorrectGuessesRemaining);
            game.incorrectGuessesRemaining--;
            
            game.previousGuesses.push(event.key.toLowerCase());

            updateScreen(game);

            if (game.incorrectGuessesRemaining <= 0) { //check if the user has guesses remaining. end game if they don't
                console.log('user loses ' + game.incorrectGuessesRemaining);

                updateScreen(game);
                game.gameNumber++;

                startGame();
            }

        } else if (game.currentWord.indexOf(game.userGuess) >= 0) {
            console.log('correct letter');
            updateMask(game.wordMask, game.userGuess, game.currentWord);

            game.previousGuesses.push(event.key.toLowerCase());

            updateScreen(game);

            if (game.correctGuesses == game.currentWord.length) {
                
                updateScreen(game)
                game.gameNumber++;
                game.numberOfWins++;
                startGame ();
            }

        }

    }; // End OnKeyUp event

function gameMessage(message) {
    document.querySelector('#gameMessages').innerHTML = message;
}

function updateScreen(game) {
    
    var html =
    '<p>Game: ' + game.gameNumber + '</p>' +
    '<p>Your word is ' + game.wordMask.join("") + '</p>' +
    '<p>Letters guessed: ' + game.previousGuesses + '</p>' +
    '<p>' + game.incorrectGuessesRemaining + ' incorrect guesses remaining' + '</p>'+
    '<p>Correct letters guessed: ' + game.correctGuesses + '</p>'
    ;

    if (game.numberOfWins == 1) {
        html = html + '<p> You have won ' + game.numberOfWins + ' game out of ' + (game.gameNumber - 1) + '.</p>'
    } else if (game.numberOfWins > 1) {
        html = html + '<p> You have won ' + game.numberOfWins + ' games out of ' + (game.gameNumber - 1) + '.</p>'
    }

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

function startGame() {

    if (game.gameNumber > 1) {
        game.currentWord = '' ;
        game.wordMask = [];
        game.userGuess = '';
        game.previousGuesses = [];
        game.incorrectGuesses = 0;
        game.incorrectGuessesRemaining = 3;
        game.correctGuesses = 0;
    }

    // get a random word from the word array and make it lower case
    game.currentWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)].toLowerCase();
 
    // create the mask to place on the screen to obsucre the word from the user
    for (let i = 0; i < game.currentWord.length; i++) {
    game.wordMask[i] = '_'
    }

    updateScreen(game);
}

function reStartGame() {

}






























