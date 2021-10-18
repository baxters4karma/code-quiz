//CREATE A QUESTION CLASS
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  //property
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// creating an array and passing the number, questions, options, and answers
const questions = [
  new Question(
    "What does HTML stand for?",
    [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    "Hyper Text Markup Language"
  ),
  new Question(
    "What does CSS stand for?",
    [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    "Cascading Style Sheet"
  ),
  new Question(
    "What does PHP stand for?",
    [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
    "Hypertext Preprocessor"
  ),
  new Question(
    "What does SQL stand for?",
    [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    "Structured Query Language"
  ),
  new Question(
    "What does XML stand for?",
    [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    "eXtensible Markup Language"
  ),

  new Question(
    "What are JavaScript Data Types?",
    [
      "number, string, boolean, function, object, undefined, lists",
      "number, string, boolean, function, tuple, undefined",
      "number, string, boolean, function, object, undefined",
      "number, string, boolean, function, object, float",
    ],
    "number, string, boolean, function, object, undefined"
  ),

  new Question(
    "Select the strict equality operator.",
    ["equals", "=", "==", "==="],
    "==="
  ),

  new Question(
    "What would be the result of 3+2+'7'?",
    ["12", "57", "327", "5+7"],
    "57"
  ),

  new Question(
    "Select item below that is NOT a JavaScript error type",
    ["Load time errors", "Run time errors", "Syntax errors", "Logical errors"],
    "Syntax errors"
  ),

  new Question(
    "What does NaN stand for?",
    [
      "Not a number",
      "Not applicable now",
      "Non-ASCII Notation",
      "Not a negative",
    ],
    "Not a number"
  ),

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numberId value serialize like 1,2,3,5,6,7,8,9.....

  //   new Question(
  //   "Your Question is Here",
  //   [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ],
  //   "Correct answer of the question is here",
  // ),
];
