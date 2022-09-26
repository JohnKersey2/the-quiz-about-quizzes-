var timer = document.querySelector(".timer");

var score = document.getElementById("score");

var secondsLeft = 120;

function quizTimer() {
    document.getElementById("startButton").style.display = "none";
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "You have " + secondsLeft + " seconds left!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendScore();
      }
    }, 1000);
  }

  // Maybe tie a secondsLeft -15 to wrong answers when clicked. 

  function sendScore() {
    timer.textContent = "You scored " + score + " out of 10!";
  }
  
  document.getElementById("startButton").addEventListener ("click", quizTimer);