var beginGame = document.getElementById("start-button")
var questionBox =document.getElementById('questions-answers')
var questionElement=document.getElementById('test-questions')
var answerElement=document.getElementById('answer-choices')

// timer vars
var timeLeft = 100

beginGame.addEventListener('click', gameBegins)
answerElement.addEventListener('click', nextQuestion)

// localStorage for high score
// localStorage.setItem()


// put questions and answers in correct locations to begin test


function gameBegins() {
 console.log('start game')
//  start timer
var timeCountdown = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    }
    else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
      else {
       //stop game if timer =<0
             timer.textContent= "Time is up"
      }
},1000)   



}

// need to change text in html
// for loop for questions and choices
function nextQuestion() {
    console.log('next question')

  for(var i=0; i<questions.length;i++) {
    questions
  }

}



// questions and answers
var questions = [ 
    {
    question: "Inside which HTML elements do we put the JavaScript?; ",
    answers: ["<div>", "<js>", "<script>'", "<javascript>" ],
    correct: 2

},
    {
    question:"Javascript can be written...",
    answers:["directly on the server page", "directly into HTML", "directly into JS file and included into HTML", "All of these"],
    correct: 2
},
    {
    question:"JavaScript is a ________ language",
    answers:["Application", "Scripting", "Programming", "None of these"],
    correct: 1  
},
    {
    question:"Javascript code can be called by using",
    answers:["preprocessor", "Trigger Event", "all of these", "Function/Method"],
    correct: 3
},
    {
    question:"The statement a===b refers to",
    answers: ["Both a and b are equal in value and type", "Both a and b are equal in value", "Both a and b are equal in type", "there is no such statement"],
    correct: 0    
    }  
]
