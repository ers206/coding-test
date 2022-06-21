var beginGame = document.getElementById("start-button")
var questionBox =document.getElementById('questions-answers')
var questionElement=document.getElementById('test-questions')
var answerElement=document.getElementById('answer-choices')

// let shuffledQuestions, currentQuestionIndex

beginGame.addEventListener('click', gameBegins)

// not working below nothing
function gameBegins() {
 console.log('start game')

      


// //  beginGame.classList.add('hide')
//  shuffledQuestions = questions.sort(() => Math.random() - .5)
//  currentQuestionIndex = 0
// //  questionBox.classList.remove('hide')
//  setNextQuestion()
}

// function setNextQuestion(){
//     nextQuestion(shuffledQuestions[currentQuestionIndex])
// }
// error line 17 and 13
function nextQuestion() {

//    questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//      const button  = document.createElement('button') 
//      button.innerText = answer.text
//      button.classList.add('choice')
//      if(answer.correct) {
//         button.dataset.correct = answer.correct
//      }
//      button.addEventListener('click', selectChoice)
//      answerElement.appendChild(button)

 //   });
}

function selectChoice() {
  
} 


// questions and answers
var questions = [ 
    {
    question: "eij iajei ailr jierja iaj; ",
    answers: ["2", "4", "5'", "8" ],
    correct: 1

},
    {
    question:
    answers:
    correct:
},
    {
    question:
    answers:
    correct:   
},
    {
    question:
    answers:
    correct:
},
    {
    question:
    answers:
    correct:    
    }
]
