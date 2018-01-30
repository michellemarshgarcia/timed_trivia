//  Simple Timer Solution
//  Step 1:
//  Use the following link inside the Audio function below:
//  https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
var audio = new Audio("buzzer.js");

setTimeout(tenSeconds, 1000 * 10);
setTimeout(twentySeconds, 1000 * 20);
setTimeout(timeUp, 1000 * 30);
//  Step 3:
//  Fill in the blanks to these functions.
function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 20 Seconds Left!</h2>");
  console.log("20 seconds left");
}
function twentySeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}
function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
  //  The following line will play the audio file we linked to above:
  audio.play();