var timer = document.getElementById("timer"); // puts the display timer in the correct place. may not need to global

var score = document.getElementById("score"); // may be useless? idk I'm too dumb to figure out this part right now

var secondsLeft = 120; // all running functions wait for button click and decrement every 1000ms

var scoreTracker = 0 // increment when answer = true

var currentQuestion = 0 // increment when answer is clicked, tie array of questions and answers to this varriable. 

const questions = ["Debuting in 1938 in the UK, what was the first televised Quiz Show?", "Who was the first host of the gameshow Jeopardy?", "2"]

const answerA = ["Truth or Consequences", "Alex Trebek", "2"]

const answerB = ["CBS Televeision Quiz Show", "Art Flemming", "2"]

const answerC = ["Information Please", "Johnny Gilbert", "2"]

const answerD = ["Spelling Bee", "Don Pardo", "2"]


function quizTimer() {
    document.getElementById("startButton").style.display = "none"; // hides start button, displays questions and answers
    document.getElementById("questionBox").style.display = "flex";
    document.getElementById("answerBox").style.display = "flex";

    function runQuiz {
      
    }
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "You have " + secondsLeft + " seconds left!";

      if(secondsLeft === 0) {  // duplicate for if currentQuestion === 10
        clearInterval(timerInterval);
        sendScore();
      }

      
      // write currentQuestion to <p>'s 
      // listen for click
      // on click, function that changes the scoreTracker and currentQuestion, decrement time if wrong


    }, 1000);
  }

  // Ways to get question display? Maybe have a variable track which quesiton you're on, display that. 

  // Maybe tie a secondsLeft -15 to wrong answers when clicked. 

  function sendScore() {
    timer.textContent = "You scored " + score + " out of 10!";
    // hide question/answers boxes 
    // display button that prompts initials / score to be tracked. "Would you like to save your score?"
  }
  
  document.getElementById("startButton").addEventListener ("click", quizTimer);