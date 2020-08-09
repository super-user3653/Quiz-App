const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const qeustnum = 4;
let curnem;
let scorenum;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  curnem = 1;
}

function setNextQuestion() {
  if(curnem === qeustnum){
      alert("Hooray!!!");
      alert("You Completed The Quiz");

  }
  else{
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    curnem++;
  }

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    scorenum++;
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 4 + 9?',
    answers: [
      { text: '94', correct: false },
      { text: '49', correct: false },
      { text: 'None Of The Above', correct: true }
    ]
  },
  {
    question: 'Who is the best Teacher',
    answers: [
      { text: 'Muhammad Ali Mughal', correct: true },
      { text: 'Sir Basit', correct: true },
      { text: 'Sir Ghous Ahmed', correct: true },

    ]
  },
  {
    question: 'Should You Go Out In This Global Pandemic',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: false },
      { text: 'Yes With Precaution', correct: true }
    ]
  },
  {
    question: 'What is 4 * 8?',
    answers: [
      { text: '84', correct: false },
      { text: '32', correct: true }
    ]
  }
]