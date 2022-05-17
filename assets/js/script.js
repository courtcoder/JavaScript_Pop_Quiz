// SECTION VARIABLES
console.log("Starting Quiz....");
var startButtonQuiz = document.querySelector("#start-quiz-button");
var startQuizScreen = document.querySelector("start-quiz-screen");
var quizQuestionsScreen = document.querySelector("quiz-questions-screen");
var questions = [
  {
    question: "First Question in the Quiz?",
    choice: ["First Choice", "Second Choice", "Third Choice"],
    answer: "First Choice",
  },
  {
    question: "Second Question in the Quiz?",
    choice: ["First Choice", "Second Choice", "Third Choice"],
    answer: "Third Choice",
  },
  {
    question: "Third Question in the Quiz?",
    choice: ["First Choice", "Second Choice", "Third Choice"],
    answer: "Second Choice",
  },
];

function displayQuestion() {
  console.log('display question please');
  questionTextElement.textContent = 'Some Text'
}

startQuizButtonElement.addEventListener("click", function () {
  console.log("start quiz");

  startQuizScreen.classList.add("hidden");
  quizQuestionsScreen.classList.remove("hidden");
});
