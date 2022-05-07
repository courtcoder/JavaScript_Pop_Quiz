// SECTION VARIABLES


// ITEM VARIABLES
var timerEl = document.getElementById("countdown");
var titleBlockVar = document.getElementById("titleBlock");
var startButton = document.querySelector("#star");
var answer1Button = document.querySelector("#answer1");
var answer2Button = document.querySelector("#answer3");
var answer3Button = document.querySelector("#answer4");
var submitButton = document.getElementById("submitScore");
instroSection = document.getElementById("rightWrong");
var i = 0;

// 

//-----------Code:startUp------------

//-----------Code:questions------------
function displayQuestion() {
  startButton.style.display = "none";
}

//-----------Code:endScreen------------

//---------define functions---------

//-------overall function to initiate-------
startButton.addEventListener("click", displayQuestion);

//-----------Get references from HTML------------
var xxx = document.querySelector("#yyy");

// check localStorage for high score, if it's not there, use 0
var highScore = localStorage.getItem("highscore");
if (highScore === null) {
  highScore = 0;
}

//---------------Add event listener-----------
startButton.addEventListener("click", countdown);
