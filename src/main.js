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

const prev = document.getElementById("prev");

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
    startCountdown();
    

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
 const questions =
 [
  {
    "question": "What is the output of the following code: console.log(typeof null);?",
    "options": [
      "object",
      "null",
      "undefined",
      "string"
    ],
    "answer": "object"
  },
  {
    "question": "Which keyword is used to declare a variable in JavaScript?",
    "options": [
      "var",
      "let",
      "const",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "What does 'NaN' stand for in JavaScript?",
    "options": [
      "Not a Number",
      "Not a Null",
      "Number and Null",
      "None of the Above"
    ],
    "answer": "Not a Number"
  },
  {
    "question": "Which of the following methods can be used to select an element by ID in JavaScript?",
    "options": [
      "getElementById()",
      "querySelector()",
      "getElementByClassName()",
      "Both getElementById() and querySelector()"
    ],
    "answer": "Both getElementById() and querySelector()"
  },
  {
    "question": "How do you create a function in JavaScript?",
    "options": [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "def myFunction()"
    ],
    "answer": "function myFunction()"
  },
  {
    "question": "What is the output of '2' + 2 in JavaScript?",
    "options": [
      "4",
      "22",
      "NaN",
      "Error"
    ],
    "answer": "22"
  },
  {
    "question": "Which method is used to parse a JSON string into a JavaScript object?",
    "options": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.parseString()"
    ],
    "answer": "JSON.parse()"
  },
  {
    "question": "Which event occurs when a user clicks on an HTML element?",
    "options": [
      "onmouseover",
      "onclick",
      "onchange",
      "onmouseclick"
    ],
    "answer": "onclick"
  },
  {
    "question": "Which operator is used to assign a value to a variable in JavaScript?",
    "options": [
      "-",
      "==",
      "=",
      "==="
    ],
    "answer": "="
  },
  {
    "question": "Which JavaScript method is used to write HTML output?",
    "options": [
      "document.write()",
      "console.log()",
      "window.write()",
      "document.print()"
    ],
    "answer": "document.write()"
  },
  {
    "question": "What is the correct syntax for referring to an external script called 'script.js'?",
    "options": [
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script src='script.js'>",
      "<script file='script.js'>"
    ],
    "answer": "<script src='script.js'>"
  },
  {
    "question": "How do you create a variable with the floating number 2.8?",
    "options": [
      "var x = 2.8;",
      "float x = 2.8;",
      "x = 2.8;",
      "let x == 2.8;"
    ],
    "answer": "var x = 2.8;"
  },
  {
    "question": "How can you add a comment in JavaScript?",
    "options": [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
      "/*This is a comment*/"
    ],
    "answer": "//This is a comment"
  },
  {
    "question": "Which method returns the character at a specified index in a string?",
    "options": [
      "charAt()",
      "getChar()",
      "characterAt()",
      "indexOf()"
    ],
    "answer": "charAt()"
  },
  {
    "question": "What does '===' operator mean in JavaScript?",
    "options": [
      "Equal in value",
      "Equal in type",
      "Equal in value and type",
      "Equal in type and not value"
    ],
    "answer": "Equal in value and type"
  },
  {
    "question": "Which of the following is not a reserved word in JavaScript?",
    "options": [
      "interface",
      "throws",
      "program",
      "short"
    ],
    "answer": "program"
  },
  {
    "question": "What is the output of the following code: console.log(2 * '2');?",
    "options": [
      "4",
      "22",
      "NaN",
      "Error"
    ],
    "answer": "4"
  },
  {
    "question": "Which built-in method sorts the elements of an array?",
    "options": [
      "changeOrder(order)",
      "order()",
      "sort()",
      "None of the above"
    ],
    "answer": "sort()"
  },
  {
    "question": "Which built-in method returns the calling string value converted to lower case?",
    "options": [
      "toLowerCase()",
      "toLower()",
      "changeCase(case)",
      "None of the above"
    ],
    "answer": "toLowerCase()"
  },
  {
    "question": "Which JavaScript function is used to parse a string and return an integer?",
    "options": [
      "parseInt()",
      "parseFloat()",
      "Integer()",
      "convertToInt()"
    ],
    "answer": "parseInt()"
  },
  {
    "question": "Which JavaScript function is used to convert an object into a JSON string?",
    "options": [
      "JSON.toString()",
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()"
    ],
    "answer": "JSON.stringify()"
  },
  {
    "question": "Which JavaScript method removes the last element from an array and returns that element?",
    "options": [
      "pop()",
      "push()",
      "last()",
      "shift()"
    ],
    "answer": "pop()"
  },
  {
    "question": "Which JavaScript method adds one or more elements to the end of an array and returns the new length of the array?",
    "options": [
      "push()",
      "pop()",
      "add()",
      "concat()"
    ],
    "answer": "push()"
  },
  {
    "question": "Which of the following is a JavaScript data type?",
    "options": [
      "Number",
      "String",
      "Boolean",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "Which of the following methods can be used to find the length of a string in JavaScript?",
    "options": [
      "str.length",
      "str.size",
      "str.count",
      "str.len"
    ],
    "answer": "str.length"
  },
  {
    "question": "Which method removes the first element from an array and returns that element?",
    "options": [
      "shift()",
      "unshift()",
      "pop()",
      "splice()"
    ],
    "answer": "shift()"
  },
  {
    "question": "How do you round a number to the nearest integer in JavaScript?",
    "options": [
      "Math.round()",
      "Math.ceil()",
      "Math.floor()",
      "Math.nearest()"
    ],
    "answer": "Math.round()"
  },
  {
    "question": "Which of the following is not a valid JavaScript variable name?",
    "options": [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above"
    ],
    "answer": "2names"
  },
  {
    "question": "What is the output of the following code: console.log(2 == '2');?",
    "options": [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    "answer": "true"
  },
  {
    "question": "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
    "options": [
      "if i = 5 then",
      "if i == 5 then",
      "if (i == 5)",
      "if i = 5"
    ],
    "answer": "if (i == 5)"
  },
  {
    "question": "Which JavaScript keyword is used to define a function?",
    "options": [
      "function",
      "void",
      "def",
      "define"
    ],
    "answer": "function"
  },
  {
    "question": "What is the output of the following code: console.log(typeof NaN);?",
    "options": [
      "number",
      "NaN",
      "undefined",
      "object"
    ],
    "answer": "number"
  },
  {
    "question": "Which JavaScript method adds one or more elements to the beginning of an array and returns the new length of the array?",
    "options": [
      "unshift()",
      "shift()",
      "push()",
      "concat()"
    ],
    "answer": "unshift()"
  },
  {
    "question": "Which built-in method returns the character at a specified index in a string?",
    "options": [
      "charAt()",
      "getChar()",
      "characterAt()",
      "indexOf()"
    ],
    "answer": "charAt()"
  },
  {
    "question": "What will be the output of the following code: console.log('5' - 1);?",
    "options": [
      "4",
      "51",
      "NaN",
      "Error"
    ],
    "answer": "4"
  },
  {
    "question": "Which of the following is the correct way to create an array in JavaScript?",
    "options": [
      "var arr = [];",
      "var arr = new Array();",
      "var arr = Array();",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "Which operator returns true if the two compared values are not equal in value or type?",
    "options": [
      "==",
      "!=",
      "!==",
      "equal()"
    ],
    "answer": "!=="
  },
  {
    "question": "Which of the following is an example of a JavaScript conditional statement?",
    "options": [
      "if",
      "for",
      "while",
      "loop"
    ],
    "answer": "if"
  },
  {
    "question": "How do you find the minimum of x and y using JavaScript?",
    "options": [
      "min(x, y)",
      "Math.min(x, y)",
      "Math.min(xy)",
      "min(xy)"
    ],
    "answer": "Math.min(x, y)"
  },
  {
    "question": "Which of the following methods can be used to find the highest index of an element in an array?",
    "options": [
      "array.indexOf()",
      "array.find()",
      "array.lastIndexOf()",
      "array.lastIndex()"
    ],
    "answer": "array.lastIndexOf()"
  },
  {
    "question": "Which of the following methods can be used to check if an array includes a certain element?",
    "options": [
      "array.includes()",
      "array.contains()",
      "array.has()",
      "array.find()"
    ],
    "answer": "array.includes()"
  },
  {
    "question": "Which of the following is not a primitive data type in JavaScript?",
    "options": [
      "String",
      "Number",
      "Boolean",
      "Object"
    ],
    "answer": "Object"
  },
  {
    "question": "What is the result of the following code: Boolean(10 > 9);?",
    "options": [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    "answer": "true"
  },
  {
    "question": "Which of the following is a way to create a JavaScript object?",
    "options": [
      "var obj = {};",
      "var obj = new Object();",
      "var obj = Object();",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "question": "How do you access a property of an object in JavaScript?",
    "options": [
      "object.property",
      "object[property]",
      "Both A and B",
      "None of the above"
    ],
    "answer": "Both A and B"
  },
  {
    "question": "Which method is used to add new elements to the beginning of an array?",
    "options": [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    "answer": "unshift()"
  },
  {
    "question": "Which of the following is not a looping structure in JavaScript?",
    "options": [
      "for",
      "while",
      "do-while",
      "foreach"
    ],
    "answer": "foreach"
  },
  {
    "question": "Which of the following methods can be used to convert a JavaScript object to a JSON string?",
    "options": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toString()",
      "JSON.convert()"
    ],
    "answer": "JSON.stringify()"
  },
  {
    "question": "How do you write a comment that has more than one line?",
    "options": [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "All of the above"
    ],
    "answer": "/* This is a comment */"
  }
]

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
      many.textContent = `${countQue+1} of 50 questions `
  if (countQue < questions.length) {
    updateQuestion(countQue);
  } else {
    next.classList.add("hidden");
    submit.classList.remove("hidden");
    
   
  }
});

prev.addEventListener("click", () => {
  if (countQue > 0) {
    countQue--;
    many.textContent = `${countQue + 1} of 50 questions `
    updateQuestion(countQue);
    next.disabled = false; 
  }
  if (countQue === 0) {
    prev.disabled = true; 
  }
});


prev.disabled = true;

