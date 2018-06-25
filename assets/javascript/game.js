
var game = {
    gameWords: ["gryffindor","hermione","hogwarts","quidditch","Snape","dumbledore","mcgonagall","longbottom","voldemort","accio","avadakedavra"],
    currentWord: "",
    currentWordMask: [],
    userGuesses: [],
    guessesRemaining: 1,
    incorrectGuesses: 3,
};

game.currentWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)];

var numberOfWins = 0;
var numberOfGuess;
var userGuess;
var gameBegin = true;

game.guessesRemaining = game.currentWord.length;
wordMask = mask(game.currentWord);

document.onkeyup = function(event) {
    console.log(event);

    userGuess = event.key;

    if (game.currentWord.indexOf(userGuess) === -1  && game.incorrectGuesses <= 3) {
        alert("bad guess " + userGuess);
        game.incorrectGuesses--;
    } else if (userGuess == 'r' && game.incorrectGuesses <= 3) {
        alert("it's in there")

        updateMask(wordMask, userGuess, game.currentWord.indexOf(userGuess));
    }
    // } else {
    //     alert("game over")
    // }

    var html =
    '<p>Your word is ' + game.currentWord + '</p>' +
    '<p>Your word is ' + wordMask + '</p>' +
    '<p>' + game.incorrectGuesses + ' incorrect guesses remaining' + '</p>'
    ;

  document.querySelector("#currentGameDiv").innerHTML = html;
};


function mask(word) {
      var masked = word.substring(0, word.length).replace(/[a-zA-Z]/g,"_")
      return masked;
    }

function updateMask(masked, guess, position) {
    masked = masked.substring(position).replace(/[_]/,guess);
    alert("got here " + guess + masked );
    return masked;
    }






























