// this will run as soon as the page is started
$(function(){
 $( "#question" ).text(calculateQuestion());
 // this will run on every button click
 $( "#another" ).click(function(){
     $( "#question" ).text(calculateQuestion());       
 });
});

function calculateQuestion() {
  var currentQuestion = questions[1] // placeholder
  $( "#question" ).text(currentQuestion[0]);
  $( "#unit" ).text(currentQuestion[1]);
};

$(function(){
 $( "#submit" ).click(function(){
     $( "#output" ).html(calculateAnswer());
     $( "#submit" ).hide();
     $( "#another" ).show();
 });
});

function calculateAnswer() {
  var currentQuestion = questions[1];
  var userAnswer = $( "#input" ).val();
  var correctAnswer = currentQuestion[2];
  if (correctAnswer < userAnswer)
      var factor = userAnswer/correctAnswer;
  else if (correctAnswer > userAnswer)
    var factor = correctAnswer/userAnswer;
  else
    var factor = "ERROR"
  factor = Math.round(factor);
  return "The correct answer is: <br />" + currentQuestion[2] + " " + currentQuestion[1] +"<br /><br /> You are wrong by a factor of <br />" + factor;
};

$(function(){
 $( "#another" ).click(function(){
     $( "#question" ).html(calculateAnswer());
  });       
});