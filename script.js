var beginGame = document.getElementById("start-button")
var questionBox =document.getElementById('questions-answers')
var questionElement=document.getElementById('test-questions')
var answerElement=document.getElementById('answer-choices')

// let shuffledQuestions, currentQuestionIndex

beginGame.addEventListener('click', gameBegins)

// not working below nothing
function gameBegins() {
 console.log('start game')
//  setTimeout()


      


}


function nextQuestion() {


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
