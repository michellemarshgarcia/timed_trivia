var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Which is the smallest planet?",
  answers: ["Mercury", "Pluto", "Earth", "Jupiter"],
  correctAnswer: "Pluto"
}, {
  question: "Which is cloest planet to ours?",
  answers: ["Neptune", "Mars", "Jupiter", "Saturn"],
  correctAnswer: "Mars"
}, {
  question: "Which is closest planet to the Sun?",
  answers: ["Earth", "Venus", "Mars", "Mercury"],
  correctAnswer: "Mercury"
}, {
  question: "Which is the hottest planet?",
  answers: ["Earth", "Venus", "Mars", "Mercury"],
  correctAnswer: "Venus"
}, {
  question: "Which is the best planet?",
  answers: ["Earth", "Venus", "Mars", "Mercury"],
  correctAnswer: "Earth"
}, {
  question: "Which is largest planet?",
  answers: ["Neptune", "Mars", "Jupiter", "Saturn"],
  correctAnswer: "Jupiter",
}, {
  question: "Which is smallest planet?",
  answers: ["Neptune", "Mars", "Pluto", "Saturn"],
  correctAnswer: "Mercury"
}, {
  question: "Which planet appears red?",
  answers: ["Venus", "Mars", "Mercury", "Earth"],
  correctAnswer: "Venus"
}];

//Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
  game.counter--;
$("#counter-number").html(game.counter);
if (game.counter === 0) {
  console.log("TIME UP");
  game.done();
};

start: function() {
timer = setInterval(game.countdown, 1000);
$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
$("#start").remove();
for (var i = 0; i < questions.length; i++) {
  panel.append("<h2>" + questions[i].question + "</h2>");
  for (var j = 0; j < questions[i].answers.length; j++) {
    panel.append("<input type='radio' name='question-" + i +
    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
  }
}
panel.append("<button id='done'>Done</button>");
},
done: function() {
$.each($("input[name='question-0']:checked"), function() {
  if ($(this).val() === questions[0].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-1']:checked"), function() {
  if ($(this).val() === questions[1].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-2']:checked"), function() {
  if ($(this).val() === questions[2].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-3']:checked"), function() {
  if ($(this).val() === questions[3].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-4']:checked"), function() {
  if ($(this).val() === questions[4].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-5']:checked"), function() {
  if ($(this).val() === questions[5].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-6']:checked"), function() {
  if ($(this).val() === questions[6].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
$.each($("input[name='question-7']:checked"), function() {
  if ($(this).val() === questions[7].correctAnswer) {
    game.correct++;
  }
  else {
    game.incorrect++;
  }
});
this.result();
},
result: function() {
clearInterval(timer);
$("#sub-wrapper h2").remove();
panel.html("<h2>All Done!</h2>");
panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
}
};

// CLICK EVENTS
$(document).on("$click", "#start", function() {
game.start();
});
$(document).on("$click", "#done", function() {
game.done();
});