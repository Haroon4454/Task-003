var questions = [
  {
    question: "What is full form SMIT?",
    choices: [
      "Saylani Welfare International Trust",
      "Saylani Welfare Trust International",
      "Saylani Trust Welfare International",
      "Welfare Trust Saylani International",
    ],
    correct: 0,
  },
  {
    question: "who are location of smit?",
    choices: [
      "university road peshawar",
      "dalazak road peshawar",
      "hayatabad peshawar",
      "mardan road",
    ],
    correct: 0,
  },
  {
    question: "What country has the longest coastline?",
    choices: ["Russia", "Indonesia", "Canada", "pakistan"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

//=============================================================
document.querySelectorAll(".choice-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const selectedChoice = parseInt(this.getAttribute("data-choice"));
    checkAnswer(selectedChoice);
  });
});

function checkAnswer(selectedChoice) {
  const correctChoice = questions[currentQuestionIndex].correct;
  if (selectedChoice === correctChoice) {
    document.getElementById("feedback").textContent = "Correct!";
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  } else {
    document.getElementById("feedback").textContent = "Try Again!";
  }
  document.getElementById("next-btn").style.display = "block";
}

//==========================================
document.getElementById("next-btn").addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endGame();
  }
});

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question-area").textContent =
    currentQuestion.question;
  document.querySelectorAll(".choice-btn").forEach((button, index) => {
    button.textContent = currentQuestion.choices[index];
  });
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}

// Load the first question
loadQuestion();

//====================================
document.querySelectorAll(".choice-btn").forEach((button) => {
  button.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#2980b9";
  });
  button.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#3498db";
  });
});
//=======================================
document.addEventListener("keydown", function (event) {
  if (event.key >= "1" && event.key <= "4") {
    const selectedChoice = parseInt(event.key) - 1;
    checkAnswer(selectedChoice);
  }
});

//====================================
function endGame() {
  document.getElementById(
    "question-area"
  ).textContent = `Game Over! Your score: ${score}/${questions.length}`;
  document.getElementById("choices").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.addEventListener("click", function () {
    location.reload(); // Reload the page to restart the quiz
  });
  document.getElementById("quiz-container").appendChild(playAgainBtn);
}
