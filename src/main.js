//importing questions from from external js file
import questions from "./question.js";
//getting html element that would be updated dynamically
const start = document.getElementById("start");
const info = document.getElementById("info");
const exit = document.getElementById("exit");
const question = document.getElementById("question");
const continueBtn = document.getElementById("cont");
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
//
const arrayOp = [op1, op2, op3, op4];
const arrayOpt = [opt1, opt2, opt3, opt4];
//hiding and viewing pages
start.addEventListener("click", () => {
  start.classList.add("hidden");
  info.classList.remove("hidden");
});
//hiding and viewing pages
exit.addEventListener("click", () => {
  info.classList.add("hidden");
  start.classList.remove("hidden");
});


continueBtn.addEventListener("click", () => {
  info.classList.add("hidden");
  question.classList.remove("hidden");
  next.classList.add("hidden");
  showQuestions(0);
  queCounter(1);
  startTimer(timeValue);
});
//initailizing variables
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
  // op1.textContent = `${questions[index]["options"][0]}`;
  // op2.textContent = `${questions[index]["options"][1]}`;
  // op3.textContent = `${questions[index]["options"][2]}`;
  // op4.textContent = `${questions[index]["options"][3]}`;
    arrayOp.forEach((op, i) => {
    op.textContent = `${questions[index]["options"][i]}`
  });

//remove the bg-green, bg-red,pointer-event-none each time this function is called
  arrayOpt.forEach((opt, i) => {
    opt.classList.remove("bg-green-300", "bg-red-300", "pointer-events-none");
    opt.innerHTML = `<span>${questions[index]["options"][i]}</span>`; 
  });

//sends the event of option selected to the optionSelected function
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

//i used insertAdjacentHTML() method to manipulate the 
//option to show heck for right answer and cross for wrong ones 

  if (userAnswer === correctAnswer) {
    userScore++;
    answer.classList.add("bg-green-300");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("bg-red-300");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
//add show the correct answer if the wrong answer was picked
    for (let i = 0; i < alloptions; i++) {
      if (arrayOp[i].textContent.trim() === correctAnswer) {
        arrayOpt[i].classList.add("bg-green-300");
        arrayOpt[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }

  // Disable all other options one option has been clicked
  arrayOpt.forEach((opt) => {
    opt.classList.add("pointer-events-none");
  });

  next.classList.remove("hidden");
}

//This function shows the user score and comment on what the user got.
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
// when timer is less than zero i automatically loops 
//through the option to pick the answer
    if (time < 0) {
      clearInterval(counter);
      const alloptions = arrayOp.length;
      let correctAnswer = questions[queCount]["answer"];
//time() method is used to remove whiespaces
      for (let i = 0; i < alloptions; i++) {
        if (arrayOp[i].textContent.trim() === correctAnswer) {
          arrayOpt[i].classList.add("bg-green-300");
          arrayOpt[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
      }
 //this part of the code disable sending of click event when the time is up     
      arrayOpt.forEach((opt) => opt.classList.add("c"));
      next.classList.remove("hidden");
    }
  }
}
//this funtion shows the number of questions that the user has answered and how many is left by 
//changing the content bottom p tag oon the quetions page
function queCounter(index) {
  many.textContent = `${index} of ${questions.length}`;
}







