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

function numberInWords(number) {
  var firstDigit = number[0];
  console.log("first digit = " + firstDigit);
  var secondDigit = number[1];
  console.log("second digit = " + secondDigit);
  var numberLength = number.length;
  console.log("number length = " + numberLength);

  if (number[0] == 9 && number[1] >= 5) {
    firstDigit = 1;
    numberLength ++;
  } else if (number[1] >= 5) {
    firstDigit ++;
  }
  
  var suffixes = [
  " ",
  " ",
  "0 ",
  " hundred",
  " thousand",
  "0 thousand",
  "00 thousand",
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
  
  if (numberLength == 0)
    approxNumber = "";
  else if (numberLength < suffixes.length)
      var approxNumber = "roughly " + firstDigit + suffixes[numberLength]
  else var approxNumber = "like, whoah, a lot of"
  
  return approxNumber;
};

$( "#input" ).keyup(function () {
  var userGuess = $( "#input" ).val();
  $( "#unit" ).html(numberInWords(userGuess) + " " + currentProblem[1]);
});

function calculateAnswer() {
  var userAnswer = $( "#input" ).val();
  var correctAnswer = currentProblem[2];
  console.log(correctAnswer);
  var correctAnswerInWords = numberInWords(String(correctAnswer));
  var correctAnswerDisplay = correctAnswer.toLocaleString() + " " + currentProblem[1] + " <br /> (" + correctAnswerInWords + ")";

  if (correctAnswer/userAnswer > 0.5 && correctAnswer/userAnswer < 2) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      factor = factor.toLocaleString();
      return "The correct answer is: <br />" + correctAnswerDisplay + "<br /><br /> You got close – hmphh, lucky guess";
  } else if (correctAnswer/userAnswer > 0.1 && correctAnswer/userAnswer < 1) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      factor = factor.toLocaleString();
      return "The correct answer is: <br />" + correctAnswerDisplay + "<br /><br /> Not so bad – you're only high by a factor of " + factor;
  } else if (correctAnswer/userAnswer > 1 && correctAnswer/userAnswer < 10) {
      var factor = correctAnswer/userAnswer;
      factor = Math.round(factor);
      factor = factor.toLocaleString();
      return "The correct answer is: <br />" + correctAnswerDisplay + "<br /><br /> Not so bad – you're only low by a factor of " + factor;
  } else if (correctAnswer < userAnswer) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      factor = factor.toLocaleString();
      return "The correct answer is: <br />" + correctAnswerDisplay + "<br /><br /> You are high by a factor of <br />" + factor;
  } else if (correctAnswer > userAnswer) {
    var factor = correctAnswer/userAnswer;
    factor = Math.round(factor);
    factor = factor.toLocaleString();
    return "The correct answer is: <br />" + correctAnswerDisplay + "<br /><br /> You are low by a factor of <br />" + factor;
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