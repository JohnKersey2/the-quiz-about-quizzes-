var timer = document.querySelector(".timer");

var score = document.getElementById("score");

var secondsLeft = 10;

function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "You have " + secondsLeft + " seconds left!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendScore();
      }
    }, 1000);
  }

  function sendScore() {
    timer.textContent = "You scored " + score + " out of 10!";
  }
  
  quizTimer();