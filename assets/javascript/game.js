
var numberOfWins = 0;

var game = {
    gameWords: ["gryffindor","hermione","hogwarts","quidditch","Snape","dumbledore","mcgonagall","longbottom","voldemort","accio","avadakedavra"],
    currentWord: "",
    currentWordMask: [],
    userGuesses: [],
    allowableGuesses: 8,
    incorrectGuesses: 0,
};

game.currentWord = game.gameWords[Math.floor(Math.random() * game.gameWords.length)];

var wordMasklength = 

document.onkeydown = function(event) {
    // document.getElementById("currentGameDiv").style.display = "none";
    console.log(event)
    var html =
    "<p>Your word is " + game.currentWord + "</p>" +
    ""
    ;

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#currentGameDiv").innerHTML = html;
};

document.onkeyup = function(event) {
    

};




























