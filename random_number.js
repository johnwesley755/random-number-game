var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score_val = document.getElementById("score");
var randomNumber = Math.floor(Math.random() * 10) + 1;
var score = 10;
function check() {
  var enterednumber = guessnumber.value;
  if (randomNumber == enterednumber) {
    console.log("Right");
    result.textContent = "Right";
    alert("YOU WON...");
  } else {
    score = score - 1;
    score_val.textContent = "score:" + score;
    result.textContent = "Wrong";
  }
}
