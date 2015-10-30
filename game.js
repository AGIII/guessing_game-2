var ans1 = document.getElementById("response1");
var ans2 = document.getElementById("response2");
var ans3 = document.getElementById("response3");
var ans4 = document.getElementById("response4");
var ans5 = document.getElementById("response5");
var ans6 = document.getElementById("response6");
var fs1 = document.getElementById("finalScore");
var r1 = document.getElementById("remember1");
var r2 = document.getElementById("remember2");
var r3 = document.getElementById("remember3");
var r4 = document.getElementById("remember4");
var ty = document.getElementById("thanks");
var display = document.getElementById('questionDisplay');
var score = 0;
var answer1, answer2, answer3, answer4; //These will store if each question was right or wrong.

display.textContent = 'What is your name?';
var name = prompt('What is your name?');
console.log("The user's name is: " + name);
alert("It's very nice to meet you " + name +". Let's play a game.");

var firstQuestion = function(){
display.textContent = 'Does A.J. drive a Jeep Wrangler?';
  var q1 = prompt("Does A.J. drive a Jeep Wrangler? YES or NO");
  if (q1.toLowerCase() === "yes" || q1.toLowerCase() === "y" || q1.toLowerCase() === "yeah") {
    ans1.innerHTML = "Correct! A.J. does drive a Jeep Wrangler!";
    console.log('The user answered q1 correctly with a: ' + q1);
    score += 1;
    answer1 = true;
  } else if (q1.toLowerCase() === "no" || q1.toLowerCase() === "n" || q1.toLowerCase() === "nope"){
    ans1.innerHTML = "Incorrect! A.J. does drive a Jeep Wrangler";
    console.log('The user answered q1 incorrectly with a: ' + q1);
    answer1 = false;
  } else {
    ans1.innerHTML = "'" + q1 + "' is an invalid answer. Try again.";
    firstQuestion();
  }
}

var secondQuestion = function(){
  display.textContent = 'Does A.J. own a cat?';
  var q2 = prompt("Does A.J. own a cat? YES or NO");
  if (q2.toLowerCase() === "yes" || q2.toLowerCase() === "y" || q2.toLowerCase() === "yeah") {
    ans2.innerHTML = "Incorrect! A.J. doesn't own any cats at all!";
    console.log('The user answered q2 incorrectly with a: ' + q2);
    answer2 = false;
  } else if (q2.toLowerCase() === "no" || q2.toLowerCase() === "n" || q2.toLowerCase() === "nope"){
    ans2.innerHTML = "Correct! A.J. doesn't own any cats at all!";
    console.log('The user answered q2 correctly with a: ' + q2);
    score += 1;
    answer2 = true;
  } else {
    ans2.innerHTML = "'" + q2 + "' is an invalid answer. Try again.";
    secondQuestion();
  }
}

var thirdQuestion = function() {
  display.textContent = 'Is A.J.\'s favorite horror film \'Rosemary\'s Baby\'?';
  var q3 = prompt("Is A.J.'s Favorite horror film 'Rosemary's Baby'? YES or NO");
  if (q3.toLowerCase() === "yes" || q3.toLowerCase() === "y" || q3.toLowerCase() === "yeah") {
    ans3.innerHTML = "Correct! A.J. loves this film!";
    console.log('The user answered q3 correctly with a: ' + q3);
    score += 1;
    answer3 = true;
  } else if (q3.toLowerCase() === "no" || q3.toLowerCase() === "n" || q3.toLowerCase() === "nope"){
    ans3.innerHTML = "Incorrect! AJ loves that movie!";
    console.log('The user answered q3 incorrectly with a: ' + q3);
    answer3 = false;
  } else {
    ans3.innerHTML = "'" + q3 + "' is an invalid answer. Try again.";
    thirdQuestion();
  }
}

var fourthQuestion = function() {
  display.textContent = "Is A.J.'s favorite vegetable eggplant?";
  var q4 = prompt("Is A.J.'s favorite vegetable eggplant? YES or NO");
  if (q4.toLowerCase() === "yes" || q4.toLowerCase() === "y" || q4.toLowerCase() === "yeah") {
    ans4.innerHTML = "Incorrect! A.J. hates eggplant!";
    console.log('The user answered q4 incorrectly with a: ' + q4);
    answer4 = false;
  } else if (q4.toLowerCase() === "no" || q4.toLowerCase() === "n" || q4.toLowerCase() === "nope"){
    ans4.innerHTML = "Correct! A.J. hates eggplant!";
    console.log('The user answered q4 correctly with a: ' + q4);
    score += 1;
    answer4 = true;
  } else {
    ans4.innerHTML = "'" + q4 + "' is an invalid answer. Try again.";
    fourthQuestion();
  }
}

function fifthQuestion() {
  display.textContent = "What number am I thinking?";
  var q5 = prompt("What number am I thinking?");
  while (parseInt(q5) !== 5) {
    if (q5 > 5){
      ans5.innerHTML = 'Incorrect! Your guess was too high. Try again';
      q5 = prompt("What number am I thinking?");
    } else if (q5 < 5) {
      ans5.innerHTML = 'Incorrect! Your guess was too low. Try again';
      q5 = prompt("What number am I thinking?");
    } else {
      ans5.innerHTML = 'Incorrect! You entered an invalid number. Please try again.';
      q5 = prompt("What number am I thinking?");
    }
  }
  ans5.innerHTML = "You guessed the correct number of 5!";
  score += 1;
}

function sixthQuestion() {
  display.textContent = "What year was A.J. born?";
  var q6 = prompt("What year was A.J. born?");
  while(parseInt(q6) !== 1987) {
    if (q6 > 1987){
      ans6.innerHTML = 'How flattering! Unfortunately, you guessed incorrectly! A.J. was born before the year ' + q6 +'. Try again.';
      q6 = prompt("What year was A.J. born?");
    } else if (q6 < 1987) {
      ans6.innerHTML = 'How dare you! A.J. was born after the year ' + q6 +'. Try again.';
      q6 = prompt("What year was A.J. born?");
    } else {
      ans6.innerHTML = 'Incorrect! You entered an invalid number.  Please try again.';
      q6 = prompt("What year was A.J. born?");
    }
  }
  ans6.innerHTML = "You guessed correctly! A.J. was born in 1987!";
  score += 1;
}

function endOfGame() {
  display.textContent = "Congratulations you completed the game. You got " + score + " out of 6 questions correct.";
  fs1.innerHTML = "You got " + score + " out of 6 questions correct.";
  console.log("The final score is: " + score + " out of 3 questions.");

  if (answer1 === false){
    r1.innerHTML = "Be sure to remember that A.J. drives a Jeep Wrangler because you got that question wrong!";
  }
  if (answer2 === false) {
    r2.innerHTML = "Be sure to remember that A.J. doesn't own any cats because you got that question wrong!";
  }
  if (answer3 === false) {
    r3.innerHTML = "Be sure to remember that A.J.'s favorite horror film is 'Rosemary's Baby' because you got that question wrong!";
  }
  if (answer4 === false) {
    r4.innerHTML = "Be sure to remember that A.J. hates eggplant because you got that question wrong!";
  }
   ty.innerHTML = "Thanks for playing and be sure to refresh if you would like to play again.";
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
endOfGame();












