let words = [
  "backscratcher",
  "organize",
  "caffeinated",
  "amazing",
  "jostle"
];
let wordArray = [];
let remainingGuesses = 20;
let lettersGuessed = [];
let guessableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function gameStart() {
  lettersGuessed = [];
  remainingGuesses = 20;
  let currentWordIndex = Math.floor(Math.random() * (words.length));
  for (var i = 0; i < words[currentWordIndex].length; i++) {
    wordArray.push("*")
  }

  updateDisplay();
}

function updateDisplay() {
  let wordText = "";
  for (var i = 0; i < wordArray.length; i++) {
    wordText += wordArray[i];
  }

  $("#remainingGuesses").text(remainingGuesses);
  $("#lettersGuessed").text(lettersGuessed)
  $("#currentWord").text(wordText);
}

if (remainingGuesses === 0) {
  alert("GAME OVER");
}

function decreaseGuesses() {
  remainingGuesses--;
  $('#remainingGuesses').text(remainingGuesses);
  if (remainingGuesses == 0) {
    alert("GAME OVER");
  }
}

$(document).keypress(function(event) {
  
  for (var i = 0; i < guessableLetters.length; i++) {
    if ( event.key === guessableLetters[i]) {
      lettersGuessed.push(event.key);
      decreaseGuesses();
    }
  } 
  $("#lettersGuessed").text(lettersGuessed)
})




















