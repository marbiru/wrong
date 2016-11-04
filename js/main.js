// this will run as soon as the page is started
$(function(){
 $( "#question" ).text(calculateQuestion());
 // this will run on every button click
 $( "#another" ).click(function(){
     $( "#question" ).text(calculateQuestion());       
 });
});

var currentProblem = "";

function calculateQuestion() {
  var randomNumber = Math.floor(Math.random() * problems.length);
  currentProblem = problems[randomNumber];
   problems.splice(randomNumber, 1);
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
  if (correctAnswer < userAnswer)
      var factor = userAnswer/correctAnswer;
  else if (correctAnswer > userAnswer)
    var factor = correctAnswer/userAnswer;
  else
    var factor = "ERROR"
  factor = Math.round(factor);
  return "The correct answer is: <br />" + currentProblem[2] + " " + currentProblem[1] +"<br /><br /> You are wrong by a factor of <br />" + factor;
};

$(function(){
 $( "#another" ).click(function(){
     $( "#question" ).html(calculateQuestion());
     $( "#output" ).html("&nbsp;");
     $( "#submit" ).show();
     $( "#another" ).hide();
  });       
});