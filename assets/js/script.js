//CREATE QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 100;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score+=10;            
        }
        this.questionIndex++;
        this.score -= 10;        
        
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

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

// DISPLAY QUESTION
function displayQuestion() {    
    
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionEl = document.getElementById("question");
        questionEl.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceEl = document.getElementById("choice" + i);
            choiceEl.innerHTML = choices[i];
            guess("btn" + i, choices[i]);            
        }

        showProgress();
    }
};

function hideQuizIntro() {
    let qIntroEl = document.getElementById("quizIntro");
    qIntroEl.style.display = "none";
    let qBox = document.getElementById("quizBox");
    qBox.style.display = "flex";
}

// create guess function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
};

// create show progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressEl = document.getElementById("progress");
    progressEl.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// show score
function showScores() {
    let totalScore = quiz.questions.length * 10;
    let quizEndHTML =
    `
            <h1>All Done!</h1>
            <h2 id="score">Your final score is ${quiz.score} of ${totalScore}</h2>
            <div class="quizRepeat">
                <a href="index.html">Take Quiz Again</a>
            </div>
        `;
    let quizEl = document.getElementById("quiz");
    quizEl.innerHTML = quizEndHTML;
}

// create quiz questions
let questions = [
    new Question(
        "What does HTML stand for?",
        ["Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"],
        "Hyper Text Markup Language"
    ),
    new Question(
        "What does CSS stand form?",
        ["Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"],
        "Cascading Style Sheet"
    ),
    new Question(
        "What does PHP stand for",
        ["Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"],
        "Hypertext Preprocessor"
    ),
    new Question(
        "What does SQL stand for?",
        ["Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"],
        "Structured Query Language"
    ),
    new Question(
        "What does XML stand for?",
        ["eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"],
        "eXtensible Markup Language"
    ),
    new Question(
        "What are JavaScript Data Types",
        ["number, string, boolean, function, object, undefined, lists",
            "number, string, boolean, function, tuple, undefined",
            "number, string, boolean, function, object, undefined",
            "number, string, boolean, function, object, float"],
        "number, string, boolean, function, object, undefined"
    ),
    new Question(
        "Select the strict equality operator.",
        ["equals",
            "=",
            "==",
            "==="],
        "==="
    ),
    new Question(
        "What would be the result of 3+2'7'?",
        ["12",
            "57",
            "327",
            "5+7"],
        "57"
    ),
    new Question(
        "Select item below that is NOT a JavaScript error type",
        ["Load time errors",
            "Run time errors",
            "Syntax errors",
            "Logical errors"],
        "Syntax errors"
    ),
    new Question(
        "What does NaN stand for?",
        ["Not a number",
            "Not applicable now",
            "Non-ASCII Notation",
            "Not a negative"],
        "Not a number"
    )
];    

let quiz = new Quiz(questions);

//display question
displayQuestion();

//add a count down
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("countDown");

function startCountdown() {
    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;            
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            let timerHTML = `TIME: ${min}:${sec}`;            
            counting.innerHTML = timerHTML;
        }
    }, 1000);
}

startCountdown();