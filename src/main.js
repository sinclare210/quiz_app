const start = document.getElementById("start");

const info = document.getElementById("info");

const exit = document.getElementById("exit");

const question = document.getElementById("question");

const cont = document.getElementById("cont");

const redeploy = document.getElementById("redeploy");

const result = document.getElementById("result");


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


