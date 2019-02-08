var secretWord = "backscratcher";
console.log("Secret Word: ", secretWord);

function registerKeyPress() {
  var keyPressed = event.key;
  console.log("key pressed", keyPressed)
  var incl = secretWord.includes(keyPressed);
  console.log("incl", incl);
}














// determine the secret word, display as "_"'s

// change letter from "_" to the letter

