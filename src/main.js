const start = document.getElementById("start");

const info = document.getElementById("info");

const exit = document.getElementById("exit");

const question = document.getElementById("question");

const cont = document.getElementById("cont");

const redeploy = document.getElementById("redeploy");

const result = document.getElementById("result");

const timeLeft = document.getElementById("timeLeft");

const next = document.getElementById("next");

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
    showQuestion(0);
    quesionCounter(1);
    startTimer(15);
   

})



let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;


redeploy.addEventListener("click", () => {
    result.classList.add("hidden");
    start.classList.remove("hidden");
    timeValue =  15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
   
    showQuestion(que_count);
    quesionCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    
    next.classList.add("hidden")
});

next.addEventListener("click",() =>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestion(que_count);
        quesionCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        next.classList.add("hidden")
    }else{
        clearInterval(counter);
        showResult(counterLine);
        showResult();
    }
})




