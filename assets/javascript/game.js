function hangmanGameStart() {
  
  
}

function checkLetter() {
  var secretWord = "backscratcher";
  var remainingGuesses = 20;
  var keyPressed = event.key;
  var incl = secretWord.includes(keyPressed);
  var guesses = document.getElementById("guessCount");
  
  if (incl == true) {
    console.log("it's in there");
  } 
  if (incl == false) {
    console.log("nope");
  }
  console.log(remainingGuesses)
  guesses.innerText = remainingGuesses;
}











