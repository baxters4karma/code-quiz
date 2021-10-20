//CREATE QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
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
        this.questionIndex++;        
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
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
    let currentQuestionNumber = quiz.questionIndex + 1;
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
                    <input id="submit" type="button" value="Submit" onclick=saveUserData(score,initials); />
                </div>
                <div class="quizRepeat">
                    <a href="index.html">Take Quiz Again</a>
                </div>
            </div>
        `;
    let quizEl = document.getElementById("quiz");
    quizEl.innerHTML = quizEndHTML;        
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
  let userInfoEl = document.querySelector("#userInitials").value;
  var userInfoScore = `${quiz.score}`;
  let nowDate = new Date();
  const userInfo = [localStorage.getItem("userInfo", JSON.parse(userInfo))];
  var userInfoNew = [userInfoScore, userInfoEl, nowDate];
    
  userInfo.push(userInfoNew);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

function loadUserData() {
    
    let highScoresBoxEl = document.getElementById("#highScores");    
    let userInfo = localStorage.getItem("userInfo");

    if (!userInfo) {
      return false;
    }

    for (let i = 0; i < userInfo.length; i++) {        

        highScoresBoxEl.innerHTML = `
            <ol id="scoresList">
                <li id="scoresListItem">userInfo[i]</li>
                <li id="scoresListItem">userInfo[i]</li>
                <li id="scoresListItem">userInfo[i]</li>
            </ol>
        `;
        highScoresBoxEl.appendChild("#scoresList");
    }    
}

startCountdown();