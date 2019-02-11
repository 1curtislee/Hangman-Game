function gameStart() {
  var guesses = document.getElementById("guessCount");
  guesses.innerText = remainingGuesses;
}

//var secretWord = "backscratcher";

var remainingGuesses = 20;
if (remainingGuesses == 0) {
  alert("GAME OVER");
}

function decreaseGuesses() {
  remainingGuesses--;
  var guesses = document.getElementById("guessCount");
  guesses.innerText = remainingGuesses;
  if (remainingGuesses == 0) {
    alert("GAME OVER");
  }
}

var letters = ["b", "a", "c", "k", "s", "c", "r", "a", "t", "c", "h", "e", "r"]

function registerKey() {
  console.log(event.key);
  if (event.key == letters[0, 0]) {
    console.log("got b");
    document.getElementById("b");
    b.innerText = "b";
  }
  if (event.key == letters[0, 1]) {
    console.log("got a");
    document.getElementById("a1");
    document.getElementById("a2");
    a1.innerText = "a";
    a2.innerText = "a";
  }
  if (event.key == letters[1, 2]) {
    console.log("got c");
    document.getElementById("c1");
    document.getElementById("c2");
    document.getElementById("c3");
    c1.innerText = "c";
    c2.innerText = "c";
    c3.innerText = "c";
  }
  if (event.key == letters[2, 3]) {
    console.log("got k");
    document.getElementById("k");
    k.innerText = "k";
  }
  if (event.key == letters[3, 4]) {
    console.log("got s");
    document.getElementById("s");
    s.innerText = "s";
  }
  if (event.key == letters[5, 6]) {
    console.log("got r");
    document.getElementById("r1");
    document.getElementById("r2");
    r1.innerText = "r";
    r2.innerText = "r";
  }
  if (event.key == letters[7, 8]) {
    console.log("got t");
    document.getElementById("t");
    t.innerText = "t";
  }
  if (event.key == letters[9, 10]) {
    console.log("got h");
    document.getElementById("h");
    h.innerText = "h";
  }
  if (event.key == letters[10, 11]) {
    console.log("got e");
    document.getElementById("e");
    e.innerText = "e";
  }
  if (event.key != letters) {
    console.log("bad guess");
  } 
}




















