let box = document.querySelector(".illustration-box");
let questions = document.querySelectorAll(".q");

questions.forEach((q) => {
  q.addEventListener("mouseover", () => {
    box.classList.add("box-moved");
  });
  q.addEventListener("mouseleave", () => {
    box.classList.remove("box-moved");
  });
});

let answers = document.querySelectorAll(".a");

for (const [index, question] of questions.entries()) {
  question.addEventListener("click", () => {
    openAndCloseAnswer(index);
  });
}

function openAndCloseAnswer(index) {
  let currentAnswer = answers[index];
  let currentQuestion = questions[index];
  if (currentAnswer.classList.contains("opened")) {
    currentQuestion.classList.remove("q-clicked");
    currentAnswer.classList.remove("opened");
  } else {
    answers.forEach((a) => {
      a.classList.remove("opened");
    });
    questions.forEach((q) => {
      q.classList.remove("q-clicked");
    });
    currentAnswer.classList.add("opened");
    currentQuestion.classList.add("q-clicked");
  }
}
