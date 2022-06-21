// var beginGame = document.getElementById("start-button");
var questionBox = document.getElementById("questions-answers");
var questionElement = document.getElementById("test-questions");
// var answerElement = document.getElementById("answer-choices");

// timer vars
var timeLeft, currentQuestion;

// beginGame.addEventListener("click", gameBegins);
// answerElement.addEventListener("click", nextQuestion);

// localStorage for high score
// localStorage.setItem()

// put questions and answers in correct locations to begin test

function startGame() {
  console.log("start game");
  //  start timer
  timeLeft = 100;
  startTimer();
  currentQuestion = 0;
  nextQuestion();
}

function startTimer() {
  var timeCountdown = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      //stop game if timer =<0
      timer.textContent = "Time is up";
    }
  }, 1000);
}
// need to change text in html

function nextQuestion() {
    console.log("next question");
    questionElement.textContent = questions[currentQuestion].question
    document.querySelector("#choiceButtonOne").textContent = questions[currentQuestion].answers[0]
    document.querySelector("#choiceButtonTwo").textContent = questions[currentQuestion].answers[1]
    document.querySelector("#choiceButtonThree").textContent = questions[currentQuestion].answers[2]
    document.querySelector("#choiceButtonFour").textContent = questions[currentQuestion].answers[3]
    
    document.querySelector("#choiceButtonOne").addEventListener("click", checkAnswer)
    document.querySelector("#choiceButtonTwo").addEventListener("click", checkAnswer)
    document.querySelector("#choiceButtonThree").addEventListener("click", checkAnswer)
    document.querySelector("#choiceButtonFour").addEventListener("click", checkAnswer)
}
// check to see if clicked answers == correct
function checkAnswer(event) {
    var choicePicked = event.target.textContent;
    currentQuestion++;
    nextQuestion()
}

// questions and answers
var questions = [
  {
    question: "Inside which HTML elements do we put the JavaScript?; ",
    answers: ["<div>", "<js>", "<script>", "<javascript>"],
    correct: "<script>",
  },
  {
    question: "Javascript can be written...",
    answers: [
      "directly on the server page",
      "directly into HTML",
      "directly into JS file and included into HTML",
      "All of these",
    ],
    correct: "directly into JS file and included into HTML",
  },
  {
    question: "JavaScript is a ________ language",
    answers: ["Application", "Scripting", "Programming", "None of these"],
    correct: "Scripting",
  },
  {
    question: "Javascript code can be called by using",
    answers: [
      "preprocessor",
      "Trigger Event",
      "all of these",
      "Function/Method",
    ],
    correct:"Function/Method" ,
    
  },
  {
    question: "The statement a===b refers to",
    answers: [
      "Both a and b are equal in value and type",
      "Both a and b are equal in value",
      "Both a and b are equal in type",
      "there is no such statement",
    ],
    correct: "Both a and b are equal in value and type",
  },
];

document.querySelector("#start-button").addEventListener("click", startGame);
