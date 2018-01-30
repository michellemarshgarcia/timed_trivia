
var audio = new Audio("buzzer.js");
var hotPlanet = Mercury;
var smallPlanet = Pluto;
var largePlanet = Jupiter;
var bestPlanet = Earth;

 var planets = ["Mercury", "Pluto", "Jupiter", "Earth"];

   
      function renderButtons() {

    
        $("#space-trivia").empty();

    
        for (var i = 0; i < planets.length; i++) {

         
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("planet");
          // Adding a data-attribute with a value of the planet at index i
          a.attr("data-name", planets[i]);
          // Providing the button's text with a value of the planet at index i
          a.text(planets[i]);
          // Adding the button to the HTML
          $("#space").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event)) {
      
    }

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