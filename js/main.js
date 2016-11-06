// this will run as soon as the page is started
$(function(){
 createProblem();
});

var currentProblem = "";

function createProblem() {
  if (problems.length > 0) {
    var randomNumber = Math.floor(Math.random() * problems.length);
    currentProblem = problems[randomNumber];
    problems.splice(randomNumber, 1);
  } else {
    currentProblem = ["No more questions, sorry!", "", ""];
  };
  
  var currentQuestion = currentProblem[0];
  $( "#question" ).text(currentQuestion);
  $( "#unit" ).text(currentProblem[1]);
};

$(function(){
 $( "#submit" ).click(function(){
     $( "#output" ).html(calculateAnswer());
     $( "#submit" ).hide();
     $( "#another" ).show();
 });
});

function numberInWords() {
  var userGuess = $( "#input" ).val();
  var firstDigit = userGuess[0];
  var secondDigit = userGuess[1];
  var userGuessLength = userGuess.length;
  if (userGuess[0] == 9 && userGuess[1] >= 5) {
    firstDigit = 1;
    userGuessLength ++;
  } else if (userGuess[1] >= 5) {
    firstDigit ++;
  }
  
  var suffixes = [
  " ",
  " ",
  "0 ",
  " hundred",
  " thousand",
  "0 thousand",
  "000 thousand",
  " million",
  "0 million",
  "00 million",
  " billion",
  "0 billion",
  "00 billion",
  " trillion",
  "0 trillion",
  "00 trillion",
  " quadrillion",
  "0 quadrillion",
  "00 quadrillion",
  " quintillion",
  ];
  
  if (userGuessLength == 0)
    userApprox = "";
  else if (userGuessLength < suffixes.length)
      var userApprox = "~" + firstDigit + suffixes[userGuessLength] + " "
  else var userApprox = "like, whoah, a lot of "
  
  return userApprox + currentProblem[1];
};

$( "#input" ).keyup(function () {
  $( "#unit" ).html(numberInWords());
});

function calculateAnswer() {
  var userAnswer = $( "#input" ).val();
  var correctAnswer = currentProblem[2];
  if (correctAnswer/userAnswer > 0.5 && correctAnswer/userAnswer < 2) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> You got close – hmphh, lucky guess";
  } else if (correctAnswer/userAnswer > 0.1 && correctAnswer/userAnswer < 1) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> Not so bad – you're only high by a factor of " + factor;
  } else if (correctAnswer/userAnswer > 1 && correctAnswer/userAnswer < 10) {
      var factor = correctAnswer/userAnswer;
      factor = Math.round(factor);
      return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> Not so bad – you're only low by a factor of " + factor;
  } else if (correctAnswer < userAnswer) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> You are high by a factor of <br />" + factor;
  } else if (correctAnswer > userAnswer) {
    var factor = correctAnswer/userAnswer;
    factor = Math.round(factor);
    return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> You are low by a factor of <br />" + factor;
  } else
    return "Something bad happened";
};

$(function(){
 $( "#another" ).click(function(){
     createProblem();
     $( "#output" ).html("&nbsp;");
     $( "#input" ).val("");
     $( "#submit" ).show();
     $( "#another" ).hide();
  });       
});