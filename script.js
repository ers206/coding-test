var beginGame = document.getElementById("start-button");
var questionBox = document.getElementById("questions-answers");
var questionElement = document.getElementById("test-questions");
// var answerElement = document.getElementById("answer-choices");

// timer vars
var timeLeft, currentQuestion = 0;

var score = "";

// localStorage for high score
// localStorage.setItem()

// console.log(currentQuestion.textContent)

// how to make visible after start button pressed
var answersVisible= document.getElementById("answer-choices");
var questionVisible = document.getElementById("test-questions");
var beginGame = document.getElementById("start-button");

// currentQuestion = 0;
// start timer, make questions and answers answersVisible, start nextQuestion, turnoff start button
function startGame() {
//   console.log("start game");
  timeLeft = 100;
  startTimer();
  nextQuestion();
  answersVisible.style.display = "grid";
  questionVisible.style.display = "grid";
  beginGame.style.display = "none";

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
    var correctChoice = questions[currentQuestion].correct
    if(choicePicked == correctChoice){
      score++
    }
    currentQuestion++;
    nextQuestion()
    // if (choicePicked == correctAnswer){
    //     score = score + 1;
    // }
    
}
// need to see if clicked choice == correct choice
// var correctAnswer = event.target.

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




console.log(currentQuestion)
    console.log(score)