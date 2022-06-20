const beginGame = document.getElementById("start-button")
const questionBox =document.getElementById('questions-answers')
const questionElement=document.getElementById('questions')
const answerElement=document.getElementById('answers')
beginGame.addEventListener('click', gameBegins)


// not working below nothing
function gameBegins() {
 console.log('start game')
 beginGame.classList.add('hide')
 questionBox.classList.remove('hide')
nextQuestion()
}
// error line 17 and 13
function nextQuestion(question) {
    // questionElement.innerText=question.question
}

function selectChoice() {

} 
const questions = [
    {
        questions: '1 + 1',
        answer: [
            {text: 3, correct: false},
            {text: 2, correct: true},
            {text: 4, correct: false},
            {text: 1, correct: false}
        ] 

    }

]