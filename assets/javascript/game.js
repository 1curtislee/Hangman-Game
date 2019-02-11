function gameStart() {

}



var secretWord = "backscratcher";
var remainingGuesses = 20;

function decreaseGuesses() {
  remainingGuesses--;
}

function checkLetter() {
  var keyPressed = event.key;
  console.log(event.key);
  var incl = secretWord.includes(keyPressed);
  
  if (incl == true) {
    console.log("GOT ONE!");
  } 
  if (incl == false) {
    console.log("nope");
  }
  
  var guessedArray = [0, 1, 2, 3]
  
  
  
  
  var guesses = document.getElementById("guessCount");
  var letters = document.getElementById("wrongLetters");
  


  //Populating body:
  secretWordLetters.innerText = "* * * * * * * * * * * * *"
  letters.innerText = guessedArray;
  guesses.innerText = remainingGuesses;

  if (remainingGuesses == 0) {
    alert("GAME OVER");
  }
}














