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

const back = document.getElementById("back");

const many = document.getElementById("many");

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");




start.addEventListener("click", () => {
    start.classList.add("hidden");
    info.classList.remove("hidden");


});

exit.addEventListener("click", () => {
     info.classList.add("hidden");
      start.classList.remove("hidden");
})

cont.addEventListener("click", () => {
    info.classList.add("hidden");
    question.classList.remove("hidden");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
})

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
    timeLeft.textContent = "time left";
    next.classList.add("hidden");

})

next.addEventListener("click", () =>{
  if(queCount < questions.length){
    queCount++;
    queNumb++;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    startTimer(timeValue);
    timeLeft.textContent = "Time left";
    next.classList.add("hidden");
  }else{
    clearInterval(counter);
    showResult();
  }
})

function showQuestions(index){
  que.textContent = `${questions[index]["numb"]}. ${questions[index]["question"]}`;
  op1.textContent = `${questions[index]["options"][0]}`
  op1.textContent = `${questions[index]["options"][1]}`
  op1.textContent = `${questions[index]["options"][2]}`
  op1.textContent = `${questions[index]["options"][3]}`

  
}




