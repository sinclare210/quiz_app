import questions from "../question.js";

const start = document.getElementById("start");
const info = document.getElementById("info");
const exit = document.getElementById("exit");
const question = document.getElementById("question");
const cont = document.getElementById("cont");
const redeploy = document.getElementById("redeploy");
const result = document.getElementById("result");
const timeLeft = document.getElementById("timeLeft");
const next = document.getElementById("next");
const que = document.getElementById("que");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const submit = document.getElementById("submit");
const many = document.getElementById("many");
const resultText = document.getElementById("resultText");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

const arrayOp = [op1, op2, op3, op4];
const arrayOpt = [opt1, opt2, opt3, opt4];

start.addEventListener("click", () => {
  start.classList.add("hidden");
  info.classList.remove("hidden");
});

exit.addEventListener("click", () => {
  info.classList.add("hidden");
  start.classList.remove("hidden");
});

cont.addEventListener("click", () => {
  info.classList.add("hidden");
  question.classList.remove("hidden");
  showQuestions(0);
  queCounter(1);
  startTimer(timeValue);
});

let timeValue = 15;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;

redeploy.addEventListener("click", () => {
  result.classList.add("hidden");
  start.classList.remove("hidden");
  timeValue = 15;
  queCount = 0;
  queNumb = 1;
  userScore = 0;
  showQuestions(queCount);
  queCounter(queNumb);
  clearInterval(counter);
  startTimer(timeValue);
  next.classList.add("hidden");
});

next.addEventListener("click", () => {
  if (queCount < questions.length - 1) {
    queCount++;
    queNumb++;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    startTimer(timeValue);
    next.classList.add("hidden");
  } else {
    clearInterval(counter);
    showResult();
  }
});

function showQuestions(index) {
  que.textContent = `${questions[index]["numb"]}. ${questions[index]["question"]}`;
  op1.textContent = `${questions[index]["options"][0]}`;
  op2.textContent = `${questions[index]["options"][1]}`;
  op3.textContent = `${questions[index]["options"][2]}`;
  op4.textContent = `${questions[index]["options"][3]}`;


  arrayOpt.forEach((opt, i) => {
    opt.classList.remove("bg-green-300", "bg-red-300", "pointer-events-none");
    opt.innerHTML = `<span>${questions[index]["options"][i]}</span>`; 
  });


  arrayOpt.forEach((opt) => {
    opt.onclick = () => optionSelected(opt); 
  });
}


let tickIconTag =
  '<i class="fa-solid fa-check rounded-full bg-green-200 p-1.5 ring-2 ring-offset-2 ring-green-400"></i>';
let crossIconTag =
  '<i class="fa-solid fa-x rounded-full bg-red-200 p-1.5 ring-2 ring-offset-2 ring-red-400"></i>';

function optionSelected(answer) {
  clearInterval(counter);
  let userAnswer = answer.textContent.trim();
  let correctAnswer = questions[queCount]["answer"];
  const alloptions = arrayOp.length;

  if (userAnswer === correctAnswer) {
    userScore++;
    answer.classList.add("bg-green-300");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("bg-red-300");
    answer.insertAdjacentHTML("beforeend", crossIconTag);

    for (let i = 0; i < alloptions; i++) {
      if (arrayOp[i].textContent.trim() === correctAnswer) {
        arrayOpt[i].classList.add("bg-green-300");
        arrayOpt[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }

  // Disable all options
  arrayOpt.forEach((opt) => {
    opt.classList.add("pointer-events-none");
  });

  next.classList.remove("hidden");
}

function showResult() {
  question.classList.add("hidden");
  result.classList.remove("hidden");
  if (userScore > (questions.length * 2) / 3) {
    resultText.textContent = `Super nice! You got ${userScore} out of ${questions.length}`;
  } else if (userScore > (questions.length * 1) / 3) {
    resultText.textContent = `Just nice! You got ${userScore} out of ${questions.length}`;
  } else {
    resultText.textContent = `Not nice! You got ${userScore} out of ${questions.length}`;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeLeft.textContent = time; 
    time--;
    if (time < 0) {
      clearInterval(counter);
      const alloptions = arrayOp.length;
      let correctAnswer = questions[queCount]["answer"];

      for (let i = 0; i < alloptions; i++) {
        if (arrayOp[i].textContent.trim() === correctAnswer) {
          arrayOpt[i].classList.add("bg-green-300");
          arrayOpt[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
      }
      arrayOpt.forEach((opt) => opt.classList.add("pointer-events-none"));
      next.classList.remove("hidden");
    }
  }
}

function queCounter(index) {
  many.textContent = `${index} of ${questions.length}`;
}







