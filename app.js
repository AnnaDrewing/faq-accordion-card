let box = document.querySelector(".illustration-box");
let questions = document.querySelectorAll(".q");
let arrowImgs = document.querySelectorAll(".arrow-icon-down");
let answers = document.querySelectorAll(".a");

questions.forEach((q) => {
  q.addEventListener("mouseover", () => {
    box.classList.add("box-moved");
  });
  q.addEventListener("mouseleave", () => {
    box.classList.remove("box-moved");
  });
});

for (const [index, question] of questions.entries()) {
  question.addEventListener("click", () => {
    openAndCloseAnswer(index);
  });
}

function openAndCloseAnswer(index) {
  if (answers[index].classList.contains("opened")) {
    closeAnswer(index);
  } else {
    removeClickedClasses();
    openAnswer(index);
  }
}

function removeClickedClasses() {
  answers.forEach((a) => {
    a.classList.remove("opened");
  });
  questions.forEach((q) => {
    q.classList.remove("q-clicked");
  });
  arrowImgs.forEach((icon) => {
    icon.classList.remove("arrow-icon-up");
  });
}

function openAnswer(index) {
  answers[index].classList.add("opened");
  questions[index].classList.add("q-clicked");
  arrowImgs[index].classList.add("arrow-icon-up");
}

function closeAnswer(index) {
  answers[index].classList.remove("opened");
  questions[index].classList.remove("q-clicked");
  arrowImgs[index].classList.remove("arrow-icon-up");
}
