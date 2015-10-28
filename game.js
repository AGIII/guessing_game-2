var score = 0;
var answer1, answer2, answer3, answer4; //These will store if each question was right or wrong.
var name = prompt('What is your name?');
console.log("The user's name is: " + name);
alert("It's very nice to meet you " + name +". Let's play a game.");

var q1 = prompt("Does A.J. drive a Jeep Wrangler? YES or NO");
if (q1.toLowerCase() === "yes" || q1.toLowerCase() === "y" || q1.toLowerCase() === "yeah") {
  alert("Correct! A.J. does drive a Jeep Wrangler!");
  console.log('The user answered q1 correctly with a: ' + q1);
  score += 1;
  answer1 = true;
} else {
  alert("Incorrect! A.J. does drive a Jeep Wrangler");
  console.log('The user answered q1 incorrectly with a: ' + q1);
  answer1 = false;
}

var q2 = prompt("Does A.J. own a cat? YES or NO");
if (q2.toLowerCase() === "yes" || q2.toLowerCase() === "y" || q1.toLowerCase() === "yeah") {
  alert("Incorrect! A.J. doesn't own any cats at all!");
  console.log('The user answered q2 incorrectly with a: ' + q2);
  answer2 = false;
} else {
  alert("Correct! A.J. doesn't own any cats at all!");
  console.log('The user answered q2 correctly with a: ' + q2);
  score += 1;
  answer2 = true;
}

var q3 = prompt("Is A.J.'s Favorite horror film 'Rosemary's Baby'? YES or NO");
if (q3.toLowerCase() === "yes" || q3.toLowerCase() === "y" || q1.toLowerCase() === "yeah") {
  alert("Correct! A.J. loves this film!");
  console.log('The user answered q3 correctly with a: ' + q3);
  score += 1;
  answer3 = true;
} else {
  alert("Incorrect! AJ loves that movie!");
  console.log('The user answered q3 incorrectly with a: ' + q3);
  answer3 = false;
}

var q4 = prompt("Is A.J.'s favorite vegetable eggplant? YES or NO");
if (q4.toLowerCase() === "yes" || q4.toLowerCase() === "y" || q4.toLowerCase() === "yeah") {
  alert("Incorrect! A.J. hates eggplant!");
  console.log('The user answered q4 incorrectly with a: ' + q4);
  answer4 = false;
} else {
  alert("Correct! A.J. hates eggplant!");
  console.log('The user answered q4 correctly with a: ' + q4);
  score += 1;
  answer4 = true;
}

alert("You got " + score + " out of 4 questions correct.");
console.log("The final score is: " + score + " out of 3 questions.");

if (answer1 === false){
  alert("Be sure to remember that A.J. drives a Jeep Wrangler because you got that question wrong!");
}
if (answer2 === false) {
  alert("Be sure to remember that A.J. doesn't own any cats because you got that question wrong!");
}
if (answer3 === false) {
  alert("Be sure to remember that A.J.'s favorite horror film is 'Rosemary's Baby' because you got that question wrong!");
}
if (answer4 === false) {
  alert("Be sure to remember that A.J. hates eggplant because you got that question wrong!");
}

 alert("Thanks for playing and be sure to refresh if you would like to play again.");
