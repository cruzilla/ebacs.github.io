var Score = 0;
var Lives = 3;
onEvent("startButton", "click", function( ) {
  setScreen("game");
});
onEvent("paw", "click", function( ) {
  var Wsize = randomNumber(50, 135);
  var Hsize = randomNumber(50, 125);
  console.log(Wsize);
  console.log(Hsize);
  setProperty("paw", "width", Wsize);
  setProperty("paw", "height", Hsize);
  var yspot = randomNumber(75, 400);
  var xspot = randomNumber(10, 250);
  setProperty("paw", "x", xspot);
  setProperty("paw", "y", yspot);
  Score = Score + 1;
  setText("score", "Score: " + Score);
  if (Score == 3) {
    setScreen("win");
  }
});
onEvent("backimage", "click", function( ) {
  Lives = Lives - 1;
  setText("lives", "Lives: " + Lives);
  if (Lives < 0) {
    setScreen("lose");
  }
});
function restart() {
  setScreen("start");
  Score = 0;
  Lives = 3;
  setText("score", "Score: " + Score);
  setText("lives", "Lives: " + Lives);
}
onEvent("winButton", "click", function( ) {
  restart();
});
onEvent("tryagain", "click", function( ) {
  restart();
});
