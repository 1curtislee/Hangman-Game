var secretWord = "backscratcher";

function registerKeypress() {
  console.log(event.key);

  if (event.key != secretWord.substring()) {
    console.log("not in word");
  } 
  /* 
  if (event.key != secretWord.substring(1, 2)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(2, 3)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(3, 4)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(4, 5)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(5, 6)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(6, 7)) {
    console.log("not in word");
  }
  if (event.key != secretWord.substring(7, 8)) {
    console.log("not in word");
  } 
  */

  if (event.key == secretWord.substring(0, 1)) {
    console.log("YES!")
  }
}

function remainingGuessesDecrease() {

}





// determine the secret word, display as "_"'s

// change letter from "_" to the letter

