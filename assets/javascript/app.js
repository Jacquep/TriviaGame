
//The player will have a limited amount of time to finish the quiz. 3 seconds //Don't forget to include a countdown timer.

function initializeTimerTo3() {

  var s = 3;


  document.getElementById("after_start").style.visibility = "visible";
  document.getElementById("counter").innerHTML = "Time Remaining: " + s;


  var interval = setInterval(changeTimeWrapper,1000);
  function changeTimeWrapper() {
    s--;

    if(s == 0) {
      clearInterval(interval);
      check();
    }


    changeTime(s);
  }
    
}

function changeTime(time) {

  
  document.getElementById("counter").innerHTML = "Time Remaining: " + time;

}




//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

function check() {

  var question1= document.quiz.q1.value;
  var question2= document.quiz.q2.value;
  var question3= document.quiz.q3.value;
  var correct= 0;
  var wrong=0;

  if (question1 == "a") {
    correct++ 
    } else {
    wrong--;
  }

  if (question2 == "b") {
    correct++
    } else {
    wrong--;
  }

  if (question3 == "d") {
    correct++
   } else {
    wrong--;
}

var message = ["Good Job!", "Doggonit"];

var range;

  if (correct < 1) {

    range = 1;
  }

  if (correct > 0) {

    range = 0;
  }



document.getElementById("after_finish").style.visibility = "visible";

document.getElementById("message").innerHTML = message[range];

document.getElementById("correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("wrong").innerHTML = "You got " + wrong + " wrong.";


};





//When the page loads show name of game and start button


//$(document).ready(){ ("#start").on(click,showQuiz()) }

//timer starts when user clicks start button

//document.getElementById("#start").addEventListener("click",setTimeout());


//When user clicks start reveal questions and timer

//("#start").on(click, showQuiz());

