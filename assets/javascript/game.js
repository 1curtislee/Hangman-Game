function gameStart() {

}




var remainingGuesses = 20;

function decreaseGuesses() {
  remainingGuesses--;
}

function checkLetter() {
  var secretWord = "backscratcher";
  var keyPressed = event.key;
  console.log(event.key);
  var incl = secretWord.includes(keyPressed);
  var guesses = document.getElementById("guessCount");
  var letters = document.getElementById("wrongLetters");
  if (incl == true) {
    console.log("GOT ONE!");
  } 
  if (incl == false) {
    console.log("nope");
  }
  
  var guessedArray = [0, 1, 2, 3]
  guessedArray[2] = event.key;

    //Populating body:
  secretWordLetters.innerText = "* * * * * * * * * * * * *"
  letters.innerText = guessedArray;
  guesses.innerText = remainingGuesses;

  if (remainingGuesses == 0) {
    alert("GAME OVER");
  }
}











