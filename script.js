const beginGame = document.getElementById("start-button")
const questionBox =document.getElementById('questions-answers')
const questionElement=document.getElementById('test-questions')
const answerElement=document.getElementById('answer-choices')

let shuffledQuestions, currentQuestionIndex

beginGame.addEventListener('click', gameBegins)

// not working below nothing
function gameBegins() {
 console.log('start game')
 beginGame.classList.add('hide')
 shuffledQuestions=questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionBox.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion(){
    nextQuestion(shuffledQuestions[currentQuestionIndex])
}
// error line 17 and 13
function nextQuestion(question) {
   questionElement.innerText = question.question
    question.answers.forEach(answer => {
     const button  = document.createElement('button') 
     button.innerText = answer.text
     button.classList.add('choice')
     if(answer.correct) {
        button.dataset.correct = answer.correct
     }
     button.addEventListener('click', selectChoice)
     answerElement.appendChild(button)

    });
}

function selectChoice() {
  
} 

// function reset

const questions = [
    {
        question: '1 + 1=?',
        answers: [
            {text: 3, correct: false},
            {text: 2, correct: true},
            {text: 4, correct: false},
            {text: 1, correct: false}
        ] 

    }

]