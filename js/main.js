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

function calculateAnswer() {
  console.log(currentProblem);
  var userAnswer = $( "#input" ).val();
  var correctAnswer = currentProblem[2];
  if (correctAnswer/userAnswer > 0.5 && correctAnswer/userAnswer < 2) {
      var factor = userAnswer/correctAnswer;
      factor = Math.round(factor);
      return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"You got close – hmphh, lucky guess";
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