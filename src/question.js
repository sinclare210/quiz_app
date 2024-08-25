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
  "question": "What is the correct way to create a new object in JavaScript?",
  "answer": "let obj = {};",
  "options": [
    "let obj = [];",
    "let obj = ();",
    "let obj = {};",
    "let obj = new Array();"
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
      "none of the above",
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
  },
  {
    "numb": 31,
    "question": "Which of the following is a loop structure in JavaScript?",
    "answer": "All of the above",
    "options": [
      "for",
      "while",
      "do-while",
      "All of the above"
    ]
  },
  {
    "numb": 32,
    "question": "How do you declare a constant in JavaScript?",
    "answer": "const",
    "options": [
      "var",
      "let",
      "const",
      "constant"
    ]
  },
  {
    "numb": 33,
    "question": "What is the use of the 'isNaN' function?",
    "answer": "Determines whether a value is NaN or not",
    "options": [
      "Converts a value to a number",
      "Determines whether a value is NaN or not",
      "Checks if a value is a string",
      "None of the above"
    ]
  },
  {
    "numb": 34,
    "question": "Which method can be used to concatenate two arrays?",
    "answer": "concat()",
    "options": [
      "concat()",
      "append()",
      "add()",
      "merge()"
    ]
  },
  {
    "numb": 35,
    "question": "What is the output of the following code: console.log(1 + '1');?",
    "answer": "11",
    "options": [
      "2",
      "11",
      "NaN",
      "Error"
    ]
  },
  {
    "numb": 36,
    "question": "Which method is used to remove the last element of an array in JavaScript?",
    "answer": "pop()",
    "options": [
      "pop()",
      "shift()",
      "remove()",
      "splice()"
    ]
  },
  {
    "numb": 37,
    "question": "How do you add a single-line comment in JavaScript?",
    "answer": "//",
    "options": [
      "//",
      "/*",
      "<>",
      "#"
    ]
  },
  {
    "numb": 38,
    "question": "Which JavaScript function is used to display a popup alert?",
    "answer": "alert()",
    "options": [
      "alert()",
      "prompt()",
      "popup()",
      "display()"
    ]
  },
  {
    "numb": 39,
    "question": "What does the 'this' keyword refer to in JavaScript?",
    "answer": "The object it belongs to",
    "options": [
      "The current function",
      "The global object",
      "The object it belongs to",
      "None of the above"
    ]
  },
  {
    "numb": 40,
    "question": "Which JavaScript method is used to add one or more elements to the beginning of an array?",
    "answer": "unshift()",
    "options": [
      "unshift()",
      "push()",
      "add()",
      "concat()"
    ]
  },
  {
    "numb": 41,
    "question": "Which JavaScript method can be used to convert an array to a string?",
    "answer": "join()",
    "options": [
      "concat()",
      "toString()",
      "join()",
      "convert()"
    ]
  },
  {
    "numb": 42,
    "question": "Which JavaScript statement is used to check for a condition?",
    "answer": "if",
    "options": [
      "check",
      "if",
      "when",
      "evaluate"
    ]
  },
  {
    "numb": 43,
    "question": "Which JavaScript method returns a string in uppercase letters?",
    "answer": "toUpperCase()",
    "options": [
      "toUpperCase()",
      "toUpper()",
      "convertUpper()",
      "upper()"
    ]
  },
  {
    "numb": 44,
    "question": "How do you create an array in JavaScript?",
    "answer": "var arr = [];",
    "options": [
      "var arr = ();",
      "var arr = [];",
      "var arr = {};",
      "var arr = <[]>;"
    ]
  },
  {
    "numb": 45,
    "question": "Which JavaScript method checks if a string contains a specified value?",
    "answer": "includes()",
    "options": [
      "contains()",
      "has()",
      "includes()",
      "indexOf()"
    ]
  },
  {
    "numb": 46,
    "question": "How can you detect the client's browser name in JavaScript?",
    "answer": "navigator.appName",
    "options": [
      "client.browserName",
      "browser.name",
      "navigator.appName",
      "None of the above"
    ]
  },
  {
    "numb": 47,
    "question": "Which statement can be used to terminate a switch statement in JavaScript?",
    "answer": "break",
    "options": [
      "stop",
      "end",
      "break",
      "terminate"
    ]
  },
  {
    "numb": 48,
    "question": "Which method returns the index of the first occurrence of a value in an array?",
    "answer": "indexOf()",
    "options": [
      "findIndex()",
      "indexOf()",
      "search()",
      "locate()"
    ]
  },
  {
    "numb": 49,
    "question": "What does the 'typeof' operator do in JavaScript?",
    "answer": "Returns the data type of a variable",
    "options": [
      "Returns the length of a string",
      "Returns the data type of a variable",
      "Checks if a variable is defined",
      "None of the above"
    ]
  },
  {
    "numb": 50,
    "question": "How do you find the number with the highest value of a and b in JavaScript?",
    "answer": "Math.max(a, b)",
    "options": [
      "Math.ceil(a, b)",
      "Math.max(a, b)",
      "top(a, b)",
      "Math.high(a, b)"
    ]
  }
]

export default questions;

