var secondsLeft = 120; // actively displays as timer on webpage - when 0 or less, ends quiz

var scoreTracker = 0 // increases when correct answer is selected, displayed when quiz ends, saved to scoreboard

var currentQuestion = 0 // increments when any answer is clicked, used in functions to determine what questions and answers to display and which answers are correct

var userInitials = localStorage.getItem('initials') // initials used to display high score 

var savedScore = localStorage.getItem('savedScore') // saved to display high score

var grade = document.getElementById('grade') // used to let user see if the answer was correct or incorrect

const questionsPool = ["In the classic version of Trivial Pursuit, what color catagory cards represent questions about Science and Nature?", "What publication popularized the trend of women's magazines having quizzes about love, intimacy, and relationships?", "As of September 2022, what is the current prize for the US version of the gameshow 'Who Wants to be a Millionare'?", "Winner of an Academcy Award for Best Picture, what British movie features a young man being accused of cheating after winning the quiz show 'Kaun Benega Crorepati'?", "Founded in 2006 by Huffington Post employees, what website started as an algorithm to cull viral internet stories later became one of the top websites for internet quizzes?", "Who was the first host of the gameshow 'Jeopardy'?", "As of September 2022, what is the most popular trivia app by downloads?", "What Organization commissioned the development of the SAT?", "What is the commonly used name for the Chinese National College Entrance Examination?", "Debuting in 1938 in the UK, what was the first televised Quiz Show?"]
//answers are B, D, A, D, C, B, A, B, C, D 
const answerPoolA = ["Blue", "Good Housekeeping", "$1,000,000", "Quiz Show", "Newgrounds", "Alex Trebek", "Trivia Crack", "The College Board", "Kaocha", "Truth or Consequences"]

const answerPoolB = ["Green", "Vanity Fair", "$2,000,000", "The Running Man", "Heywise", "Art Flemming", "Jeopardy! Trivia", "The US Army", "Ceshi", "CBS Televeision Quiz Show"]

const answerPoolC = ["Pink", "Vogue", "$10,000,000", "Life of Pi", "Buzzfeed", "Johnny Gilbert", "PopcornTrivia", "The Rockefeller Foundation", "Gaokao", "Information Please",]

const answerPoolD = ["Brown", "Cosmopolitan", "$250,000", "Slumdog Millionare", "Mentalfloss", "Don Pardo", "Trivia Crush", "Harvard", "Shiyan", "Spelling Bee",]

document.getElementById("answerA").addEventListener ("click", function () { // Runs if answer A is selected
  if (currentQuestion === 2 || currentQuestion === 6) {
    scoreTracker++
    grade.textContent = "Correct!"
  } else {
    secondsLeft = secondsLeft-15
    grade.textContent = "Incorrect! -15 Seconds!!"
  }

  currentQuestion++
  rewriteQandA();
})

document.getElementById("answerB").addEventListener ("click", function() { // Runs if answer B is selected
  if (currentQuestion === 0 || currentQuestion === 5 || currentQuestion === 7) {
    scoreTracker++
    grade.textContent = "Correct!"
  } else {
    secondsLeft = secondsLeft-15
    grade.textContent = "Incorrect! -15 Seconds!!"
  }

  currentQuestion++
  rewriteQandA();
})

document.getElementById("answerC").addEventListener ("click", function() { // Runs if answer C is selected
  if (currentQuestion === 4 || currentQuestion === 8) {
    scoreTracker++
    grade.textContent = "Correct!"
  } else {
    secondsLeft = secondsLeft-15
    grade.textContent = "Incorrect! -15 Seconds!!"
  }

  currentQuestion++
  rewriteQandA();
})

document.getElementById("answerD").addEventListener ("click", function () { // Runs if answer D is selected
  if (currentQuestion === 1 || currentQuestion === 3 || currentQuestion === 9) {
    scoreTracker++
    grade.textContent = "Correct!"
  } else {
    secondsLeft = secondsLeft-15
    grade.textContent = "Incorrect! -15 Seconds!!"
  }

  currentQuestion++
  rewriteQandA();
})

function rewriteQandA() {  // Called by userAnswer functions, this rewrites questions and answers by setting linking variables to the html and rewriting their text depending on the currentQuestion variable. 

  var question = document.getElementById("question") 
  var answerA = document.getElementById("answerA")
  var answerB = document.getElementById("answerB")
  var answerC = document.getElementById("answerC")
  var answerD = document.getElementById("answerD")

  question.textContent = questionsPool.at(currentQuestion)
  answerA.textContent = answerPoolA.at(currentQuestion)
  answerB.textContent = answerPoolB.at(currentQuestion)
  answerC.textContent = answerPoolC.at(currentQuestion)
  answerD.textContent = answerPoolD.at(currentQuestion)
}

document.getElementById("startButton").addEventListener ("click", function() { // Starts the quiz
    document.getElementById("startButton").style.display = "none" // hides start button, displays questions and answers that were originally hidden
    document.getElementById("questionBox").style.display = "flex"
    document.getElementById("answerBox").style.display = "flex"

    var timer = document.getElementById("timer") // allows timer to appear and be rewritten by setInterval function
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "You have " + secondsLeft + " seconds left!"

      if(secondsLeft <= 0 || currentQuestion === 10) { // moves quiz to scoring stage when time is up or there are no more questions
        clearInterval(timerInterval)
        sendScore()
      }
    }, 1000);
  })

  // see if I can nestle sendScore into the timer

  function sendScore() { // When quiz is done, hides q/a, displays score and gives user button to save initials
    document.getElementById("questionBox").style.display = "none"; 
    document.getElementById("answerBox").style.display = "none";
    document.getElementById("gradeBox").style.display = "none";
    timer.textContent = "You scored " + scoreTracker + " out of 10!"
    document.getElementById("promptInitials").style.display = "flex"
  }

  document.getElementById("promptButton").addEventListener ("click", function() { // if user clicks to save initials, changes elements to allow them to do so
    document.getElementById("promptInitials").style.display = "none"
    document.getElementById("saveInput").style.display = "flex"
  })

  document.getElementById("saveButton").addEventListener ("click", function() { // when user hits save, this saves initials and current score to local storage
    var initials = document.getElementById("initials").value
    var savedScore = scoreTracker

    if(initials.length > 3 || initials.length < 2) {
      alert("Please enter two or three letters.")
    } else {
    localStorage.setItem("savedScore", savedScore)
    localStorage.setItem("initials", initials)
    document.getElementById("saveInput").style.display = "none"
    document.getElementById("tryAgain").style.display = "flex"
   }
   displayScoreboard()
  })

  document.getElementById("tryAgainButton").addEventListener ("click", function() { // reloads the page to allow the quiz to be ran again
    window.location.reload()
  })

  function displayScoreboard () { // Displays scoreboard on load or when new initials are entered
    var savedScore = localStorage.getItem('savedScore')
    var userInitials = localStorage.getItem('initials') // redefines variables if user enters input

   if(userInitials != null) {
    var scoreboard = document.getElementById("scoreboard")
    var scoreboardHeader = document.getElementById("scoreboardHeader")
    scoreboard.textContent = userInitials + " - " + savedScore + " out of 10"
    scoreboardHeader.textContent = "The Current High Score Is:"
   }
  }

 displayScoreboard() // displays scoreboard from local storage on load 