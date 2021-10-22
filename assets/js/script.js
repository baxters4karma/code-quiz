//CREATE QUIZ CLASS
class Quiz {
    constructor(questions, result) {
        this.score = 0;
        this.questions = questions;
        result = getRandomNumber(0, questions.length - 1);
        this.questionIndex = result;
        this.questionCount = 1;        
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {            
            this.score += 10;
        } else {
            this.score -= 10;
        }
        this.questionIndex = getRandomNumber(0, questions.length - 1);
        this.questionCount++;
    }

    isEnded() {
        return this.quizTime === 0;
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

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

function hideQuizIntro() {
    let qIntroEl = document.getElementById("quizIntro");
    qIntroEl.style.display = "none";
    let qBox = document.getElementById("quizBox");
    qBox.style.display = "flex";
};

function hideHighScores() {
    let highScoresBoxEl = document.getElementById("highScoresBox");
    highScoresBoxEl.style.display = "none";
    let qBox = document.getElementById("quizBox");
    qBox.style.display = "flex";
};

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
    
    let currentQuestionNumber = quiz.questionCount;
    let progressEl = document.getElementById("progress");
    progressEl.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
    let currScoreEl = document.getElementById("currentScore");
    currScoreEl.innerHTML = `Score: ${quiz.score}`;
};

// show score
function showScores() {    
    let totalScore = quiz.questions.length * 10;
    let quizEndHTML = `
            <h1 id="score">All Done!</h1>
            <h2 id="score">Your final score is: </br> ${quiz.score} of ${totalScore}</h2>
            <div id="initials">
                Enter initials:
                <input type="text" name="userInitials" id="userInitials" />
            </div>
            <div id="resultBox" class="resultBox">
                <div id="resultBoxButton" class="resultBoxButton">
                    <input id="submit" type="button" value="Submit" onclick=saveUserData(); />
                </div>
                <div id="resultBoxButton" class="resultBoxButton">
                    <input id="view" type="button" value="View High Scores" onclick="loadUserData();" />
                </div>
                <div class="quizRepeat">
                    <a href="index.html">Take Quiz Again</a>
                </div>
            </div>
        `;
    let quizEl = document.getElementById("quiz");
    quizEl.innerHTML = quizEndHTML;
    document.getElementById("view").addEventListener("click", viewHighScores);
};

//acquire questions

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
};

function saveUserData() {
    var newDataEl = document.getElementById("highScoresContent").value;
    let userInfoEl = document.querySelector("#userInitials").value;
    var userInfoScore = `${quiz.score}`;
    let nowDate = new Date();
    
    let newUserInfo = { "initials": userInfoEl, "score": userInfoScore, "date": nowDate };

    newDataEl = newUserInfo;   

    if (localStorage.getItem("userInfo") === null) {
        localStorage.setItem("userInfo", "[]");
    }

    var oldData = JSON.parse(localStorage.getItem("userInfo"));
    oldData.push(newDataEl);

    localStorage.setItem("userInfo", JSON.stringify(oldData));

    window.alert("Score has been saved!");
}

function loadUserData() {    
    var scoresListEl = document.getElementById("scoresList");
    
    if (localStorage.getItem("userInfo") != null) {
        var currUserInfoArr = JSON.parse(localStorage.getItem("userInfo"));
        
        for (let i = 0; i < currUserInfoArr.length; i++) {            
            currUserInfoArr[i].initials;
            currUserInfoArr[i].score;
            currUserInfoArr[i].date;
            var row = document.createElement("tr");
            row.setAttribute("id", "tblDataRow");
            row.innerHTML = `
                <tr id="tblDataRow">                    
                    <td id="initials">${currUserInfoArr[i].initials}</td>
                    <td id="score">${currUserInfoArr[i].score}</td>
                    <td id="datePlayed">${currUserInfoArr[i].date}</td>
                </tr>
            `;            
                        
            scoresListEl.appendChild(row);
        };        
    }
};

function viewHighScores() {
    let quizBoxEl = document.getElementById("quizBox");
    quizBoxEl.style.display = "none";

    let highScoresBoxEl = document.getElementById("highScoresBox");
    highScoresBoxEl.style.display = "block";
    loadUserData();
};

startCountdown();