import questions from "../question.js";

const start = document.getElementById("start");

const info = document.getElementById("info");

const exit = document.getElementById("exit");

const question = document.getElementById("question");

const cont = document.getElementById("cont");

const redeploy = document.getElementById("redeploy");

const result = document.getElementById("result");

const timeLefts = document.getElementById("timeLeft");

const next = document.getElementById("next");

const que = document.getElementById("que");

const op1 = document.getElementById("op1");

const op2 = document.getElementById("op2");

const op3 = document.getElementById("op3");

const op4 = document.getElementById("op4");

const submit = document.getElementById("submit");

const back = document.getElementById("back");

const many = document.getElementById("many");;

let timeLeft;

let countQue = 0;


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
  
    

})

redeploy.addEventListener("click", () => {
    result.classList.add("hidden");
    start.classList.remove("hidden");
})

//setting countdown
function startCountdown(){
    timeLeft = 20;
    timeLefts.textContent = timeLeft;
    setInterval(() => {
        timeLeft--;
        if(timeLeft > 0){
            timeLefts.textContent = timeLeft;
        }
        if(timeLeft === 0){
            timeLefts.textContent = 0;
        }
    },1000);
}

//dynamically updating the question


const updateQuestion = (index) => {
  que.textContent = questions[index]["question"];
  op1.textContent = questions[index]["options"][0];
  op2.textContent = questions[index]["options"][1];
  op3.textContent = questions[index]["options"][2];
  op4.textContent = questions[index]["options"][3];
};

// Initial setup
countQue = 0;
updateQuestion(countQue);
      many.textContent = `${countQue+1} of 50 questions `


next.addEventListener("click", () => {
  countQue++;
  startCountdown();
      many.textContent = `${countQue+1} of 50 questions `
  if (countQue < questions.length) {
    updateQuestion(countQue);
  } else {
    next.classList.add("hidden");
    submit.classList.remove("hidden");
    
   
  }
});

