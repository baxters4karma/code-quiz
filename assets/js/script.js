// Selecting required elements
var timeEl = document.querySelector("#hdrTimerSec");
var startBtnEl = document.querySelector("#start");
var quizIntroEl = document.getElementById("quizIntro");
var quizBoxEl = document.querySelector("#quizBox");
var optionListEl = document.querySelectorAll("#quizBoxOptions");
var userSelection = "";
var timeValue = 60;
var userScore = 0;


//Attach event listener for Start Quiz button
startBtnEl.addEventListener("click", function () {
    countdown(); //starting time countdown
    quizIntroEl.style.display = "none"; //hiding intro text 
    showContent(); //calling showContent function for questions/choices    
});


quizBoxEl.addEventListener("click", function () {
    console.log(optionListEl.outerHTML);
    console.log(questions.options);
    if (optionListEl.outerHTML == questions.options) {
        userSelection = optionListEl.outerHTML;
    } else {
        userSelection = "wrong";        
    };    
    
    getUserSelection(userSelection);
    
});

function countdown() {
    // Timer that counts down from 60
    var timeLeft = timeValue;

    var timeInterval = setInterval(function () {
        // As long as the time left is greater than 1
        if (timeLeft > 1) {
            // Set the textContent of timerEl to show the remaining seconds            
            timeEl.textContent = timeLeft;
            // Decrement timeLeft by 1
            timeLeft--;
        } else {
            // Once timeLeft gets to 0, set timeEl to an empty string
            timeEl.textContent = "";
            // Use clearInterval() to stop the timer
            clearInterval(timeInterval);            
        }
    }, 1000);
}

function showContent() {        
    for (var i = 0; i < questions.length; i++) {
      let quizNumber = questions[i];
      let quizBoxEl = document.getElementById("quizBox");
      quizBoxEl[i] = document.createElement("div");
      quizBoxEl[i].id = "quizBoxCard";
      quizBoxEl[i].className = "quizBoxCard";
      quizBoxEl.appendChild(quizBoxEl[i]);

      let quizBoxCardEl = document.getElementById("quizBoxCard");
      quizBoxCardEl[i] = document.createElement("div");
      quizBoxCardEl[i].id = "quizBoxGroup";
      quizBoxCardEl[i].className = "quizBoxGroup";
      quizBoxCardEl.appendChild(quizBoxCardEl[i]);

      let quizBoxContentEl = document.getElementById("quizBoxGroup");
      quizBoxContentEl[i] = document.createElement("div");
      quizBoxContentEl[i].id = "quizBoxContent";
      quizBoxContentEl[i].className = "quizBoxContent";
      quizBoxContentEl[i].innerHTML =
        "<h3 id='quizBoxQuestion' class='quizBoxQuestion'>" +
        quizNumber.question +
        "</h3>";
      quizBoxContentEl.appendChild(quizBoxContentEl[i]);

      let quizNumberId = i;
     
      showOptions(quizNumberId);
    }    
}

function showOptions(number) {
    let questionNumber = number;
    let quizNumber = questions[questionNumber];
    let quizBoxEl = document.getElementById("quizBox");    
    let quizBoxContentEl = document.getElementById("quizBoxGroup");
    // const option = optionList.querySelectorAll(".option");
    
    if (questionNumber === quizNumber.numberId) {
        for (var j = 0; j < quizNumber.options.length; j++) {
            quizBoxEl[j] = document.createElement("div");
            quizBoxEl[j].id = "quizBoxOptions";
            quizBoxEl[j].className = "quizBoxOptions";
            quizBoxEl[j].innerHTML =
                "<input type='button' id='quizBoxOption' class='quizBoxOption'>" +
                quizNumber.options[j] +
                "</input>";
            let quizBoxOptionEl = quizBoxEl[j];
            quizBoxContentEl.appendChild(quizBoxOptionEl);
            // option[j].setAttribute("onclick", "optionSelected(this)");
        }
    }
};

function getUserSelection(userSelection) {
    
    let userAnswer = userSelection; //getting user selected option
    let correctAnswer = questions.answer;  //getting correct answer from array

    if (userAnswer == correctAnswer) {
        //if user selected option equal to array's correct answer
        userScore += 10;  //adding 10 to time/score value
        console.log("Correct Answer");        
    } else {
        userScore -= 10; //subtracting 10 from time/score value
        console.log("Wrong Answer");
    }

    if (userScore === 0) {
        showResult();
    } else {
        showContent();
    }

}

function showResult() {    
    quizBoxCardEl.style.display = "none";
    resultBox.style.display = "block";
    const scoreText = resultBox.querySelector(".scoreText");

}