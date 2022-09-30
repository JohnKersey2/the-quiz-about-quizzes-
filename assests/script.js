var secondsLeft = 120; // all running functions wait for button click and decrement every 1000ms

var scoreTracker = 0 // increment when answer = true

var currentQuestion = 0 // increment when answer is clicked, tie array of questions and answers to this varriable. 

const questionsPool = ["In the classic version of Trivial Pursuit, what color catagory cards represent questions about Science and Nature?", "What publication popularized the trend of women's magazines having quizzes about love, intimacy, and relationships?", "As of September 2022, what is the current prize for the US version of the gameshow 'Who Wants to be a Millionare'?", "Winner of an Academcy Award for Best Picture, what British movie features a young man being accused of cheating after winning the quiz show 'Kaun Benega Crorepati'?", "Founded in 2006 by Huffington Post employees, what website started as an algorithm to cull viral internet stories later became one of the top websites for internet quizzes?", "Who was the first host of the gameshow 'Jeopardy'?", "As of September 2022, what is the most popular trivia app by downloads?", "What Organization commissioned the development of the SAT?", "What is the commonly used name for the Chinese National College Entrance Examination?", "Debuting in 1938 in the UK, what was the first televised Quiz Show?"]
//answers are B, D, A, D, C, B, A, B, C, D 
const answerPoolA = ["Blue", "Good Housekeeping", "$1,000,000", "Quiz Show", "Newgrounds", "Alex Trebek", "Trivia Crack", "The College Board", "Kaocha", "Truth or Consequences"]

const answerPoolB = ["Green", "Vanity Fair", "$2,000,000", "The Running Man", "Heywise", "Art Flemming", "Jeopardy! Trivia", "The US Army", "Ceshi", "CBS Televeision Quiz Show"]

const answerPoolC = ["Pink", "Vogue", "$10,000,000", "Life of Pi", "Buzzfeed", "Johnny Gilbert", "PopcornTrivia", "The Rockefeller Foundation", "Gaokao", "Information Please",]

const answerPoolD = ["Brown", "Cosmopolitan", "$250,000", "Slumdog Millionare", "Mentalfloss", "Don Pardo", "Trivia Crush", "Harvard", "Shiyan", "Spelling Bee",]

function userAnswerA (){
  if (currentQuestion === 2 || currentQuestion === 6) {
    scoreTracker++
  } else {
    secondsLeft = secondsLeft-15
  }

  currentQuestion++
  rewriteQandA();
}

function userAnswerB (){
  if (currentQuestion === 0 || currentQuestion === 5 || currentQuestion === 7) {
    scoreTracker++
  } else {
    secondsLeft = secondsLeft-15
  }

  currentQuestion++
  rewriteQandA();
}

function userAnswerC (){
  if (currentQuestion === 4 || currentQuestion === 8) {
    scoreTracker++
  } else {
    secondsLeft = secondsLeft-15
  }

  currentQuestion++
  rewriteQandA();
}

function userAnswerD (){
  if (currentQuestion === 1 || currentQuestion === 3 || currentQuestion === 9) {
    scoreTracker++
  } else {
    secondsLeft = secondsLeft-15
  }

  currentQuestion++
  rewriteQandA();
}

function rewriteQandA (){

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

function quizTimer() {
    document.getElementById("startButton").style.display = "none"; // hides start button, displays questions and answers
    document.getElementById("questionBox").style.display = "flex";
    document.getElementById("answerBox").style.display = "flex";

    var timer = document.getElementById("timer")
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "You have " + secondsLeft + " seconds left!";

      if(secondsLeft <= 0 || currentQuestion === 10) { 
        clearInterval(timerInterval);
        sendScore();
      }
    }, 1000);
  }

  function sendScore() {
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("answerBox").style.display = "none";
    timer.textContent = "You scored " + scoreTracker + " out of 10!";

    // display button that prompts initials / score to be tracked. "Would you like to save your score?"
  }
  
  // Listeners to start quiz or answer questions. 
  document.getElementById("startButton").addEventListener ("click", quizTimer);
  document.getElementById("answerA").addEventListener ("click", userAnswerA);
  document.getElementById("answerB").addEventListener ("click", userAnswerB);
  document.getElementById("answerC").addEventListener ("click", userAnswerC);
  document.getElementById("answerD").addEventListener ("click", userAnswerD);