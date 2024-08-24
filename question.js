 const questions =
[
  {
    "numb": 1,
    "question": "What is the output of the following code: console.log(typeof null);?",
    "answer": "object",
    "options": [
      "object",
      "null",
      "undefined",
      "string"
    ]
  },
  {
    "numb": 2,
    "question": "Which keyword is used to declare a variable in JavaScript?",
    "answer": "All of the above",
    "options": [
      "var",
      "let",
      "const",
      "All of the above"
    ]
  },
  {
    "numb": 3,
    "question": "What does 'NaN' stand for in JavaScript?",
    "answer": "Not a Number",
    "options": [
      "Not a Number",
      "Not a Null",
      "Number and Null",
      "None of the Above"
    ]
  },
  {
    "numb": 4,
    "question": "Which of the following methods can be used to select an element by ID in JavaScript?",
    "answer": "Both getElementById() and querySelector()",
    "options": [
      "getElementById()",
      "querySelector()",
      "getElementByClassName()",
      "Both getElementById() and querySelector()"
    ]
  },
  {
    "numb": 5,
    "question": "How do you create a function in JavaScript?",
    "answer": "function myFunction()",
    "options": [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "def myFunction()"
    ]
  },
  {
    "numb": 6,
    "question": "What is the output of '2' + 2 in JavaScript?",
    "answer": "22",
    "options": [
      "4",
      "22",
      "NaN",
      "Error"
    ]
  },
  {
    "numb": 7,
    "question": "Which method is used to parse a JSON string into a JavaScript object?",
    "answer": "JSON.parse()",
    "options": [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.parseString()"
    ]
  },
  {
    "numb": 8,
    "question": "Which event occurs when a user clicks on an HTML element?",
    "answer": "onclick",
    "options": [
      "onmouseover",
      "onclick",
      "onchange",
      "onmouseclick"
    ]
  },
  {
    "numb": 9,
    "question": "Which operator is used to assign a value to a variable in JavaScript?",
    "answer": "=",
    "options": [
      "-",
      "==",
      "=",
      "==="
    ]
  },
  {
    "numb": 10,
    "question": "Which JavaScript method is used to write HTML output?",
    "answer": "document.write()",
    "options": [
      "document.write()",
      "console.log()",
      "window.write()",
      "document.print()"
    ]
  },
  {
    "numb": 11,
    "question": "What is the correct syntax for referring to an external script called 'script.js'?",
    "answer": "<script src='script.js'>",
    "options": [
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script src='script.js'>",
      "<script file='script.js'>"
    ]
  },
  {
    "numb": 12,
    "question": "How do you create a variable with the floating number 2.8?",
    "answer": "var x = 2.8;",
    "options": [
      "var x = 2.8;",
      "float x = 2.8;",
      "x = 2.8;",
      "let x == 2.8;"
    ]
  },
  {
    "numb": 13,
    "question": "How can you add a comment in JavaScript?",
    "answer": "//This is a comment",
    "options": [
      "//This is a comment",
      "'This is a comment",
      "<!--This is a comment-->",
      "/*This is a comment*/"
    ]
  },
  {
    "numb": 14,
    "question": "Which method returns the character at a specified index in a string?",
    "answer": "charAt()",
    "options": [
      "charAt()",
      "getChar()",
      "characterAt()",
      "indexOf()"
    ]
  },
  {
    "numb": 15,
    "question": "What does '===' operator mean in JavaScript?",
    "answer": "Equal in value and type",
    "options": [
      "Equal in value",
      "Equal in type",
      "Equal in value and type",
      "Equal in type and not value"
    ]
  },
  {
    "numb": 16,
    "question": "Which of the following is not a reserved word in JavaScript?",
    "answer": "program",
    "options": [
      "interface",
      "throws",
      "program",
      "short"
    ]
  },
  {
    "numb": 17,
    "question": "What is the output of the following code: console.log(2 * '2');?",
    "answer": "4",
    "options": [
      "4",
      "22",
      "NaN",
      "Error"
    ]
  },
  {
    "numb": 18,
    "question": "Which built-in method sorts the elements of an array?",
    "answer": "sort()",
    "options": [
      "changeOrder(order)",
      "order()",
      "sort()",
      "None of the above"
    ]
  },
  {
    "numb": 19,
    "question": "Which built-in method returns the calling string value converted to lower case?",
    "answer": "toLowerCase()",
    "options": [
      "toLowerCase()",
      "toLower()",
      "changeCase(case)",
      "None of the above"
    ]
  },
  {
    "numb": 20,
    "question": "Which JavaScript function is used to parse a string and return an integer?",
    "answer": "parseInt()",
    "options": [
      "parseInt()",
      "parseFloat()",
      "Integer()",
      "convertToInt()"
    ]
  },
  {
    "numb": 21,
    "question": "Which JavaScript function is used to convert an object into a JSON string?",
    "answer": "JSON.stringify()",
    "options": [
      "JSON.toString()",
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()"
    ]
  },
  {
    "numb": 22,
    "question": "Which JavaScript method removes the last element from an array and returns that element?",
    "answer": "pop()",
    "options": [
      "pop()",
      "push()",
      "last()",
      "shift()"
    ]
  },
  {
    "numb": 23,
    "question": "Which JavaScript method adds one or more elements to the end of an array and returns the new length of the array?",
    "answer": "push()",
    "options": [
      "push()",
      "pop()",
      "add()",
      "concat()"
    ]
  },
  {
    "numb": 24,
    "question": "Which of the following is a JavaScript data type?",
    "answer": "All of the above",
    "options": [
      "Number",
      "String",
      "Boolean",
      "All of the above"
    ]
  },
  {
    "numb": 25,
    "question": "Which of the following methods can be used to find the length of a string in JavaScript?",
    "answer": "str.length",
    "options": [
      "str.length",
      "str.size",
      "str.count",
      "str.len"
    ]
  },
  {
    "numb": 26,
    "question": "Which method removes the first element from an array and returns that element?",
    "answer": "shift()",
    "options": [
      "shift()",
      "unshift()",
      "pop()",
      "splice()"
    ]
  },
  {
    "numb": 27,
    "question": "How do you round a number to the nearest integer in JavaScript?",
    "answer": "Math.round()",
    "options": [
      "Math.round()",
      "Math.ceil()",
      "Math.floor()",
      "Math.nearest()"
    ]
  },
  {
    "numb": 28,
    "question": "Which of the following is not a valid JavaScript variable name?",
    "answer": "2names",
    "options": [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above"
    ]
  },
  {
    "numb": 29,
    "question": "How do you call a function named 'myFunction' in JavaScript?",
    "answer": "myFunction()",
    "options": [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
      "call.myFunction()"
    ]
  },
  {
    "numb": 30,
    "question": "Which method returns the primitive value of a specified object?",
    "answer": "valueOf()",
    "options": [
      "toSource()",
      "valueOf()",
      "toString()",
      "None of the above"
    ]
  }
]

export default questions;

