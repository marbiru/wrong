var currentProblem;

// this will run as soon as the page is started
$(function() {
  storeProblemsInSession();
  createProblem();
});

function createProblem() {
  currentProblem = popProblemFromSession();

  if (currentProblem === 'empty') {
    currentProblem = 'No more questions, sorry!';
  }

  var currentQuestion = currentProblem.question;
  $('#question').text(currentQuestion);
  $('#unit').text(currentProblem.unit);
}

$(function() {
  $('#submit').click(function() {
    $('#output').show();
    $('#output').html(calculateAnswer());
    $('#submit').hide();
    $('#another').show();
  });
});

function numberInWords(number) {
  if (number.match(/[\D]/) && number !== '') {
    return null;
  }

  var firstDigit = number[0];
  var secondDigit = number[1];
  var numberLength = number.length;

  if (number[0] == 9 && number[1] >= 5) {
    firstDigit = 1;
    numberLength++;
  } else if (number[1] >= 5) {
    firstDigit++;
  }

  var suffixes = [
    ' ',
    ' ',
    '0 ',
    ' hundred',
    ' thousand',
    '0 thousand',
    '00 thousand',
    ' million',
    '0 million',
    '00 million',
    ' billion',
    '0 billion',
    '00 billion',
    ' trillion',
    '0 trillion',
    '00 trillion',
    ' quadrillion',
    '0 quadrillion',
    '00 quadrillion',
    ' quintillion',
  ];

  if (numberLength == 0) approxNumber = '';
  else if (numberLength < suffixes.length)
    var approxNumber = `roughly ${firstDigit} ${suffixes[numberLength]}`;
  else var approxNumber = 'like, whoah, a lot of';

  return approxNumber;
}

$('#input').keyup(function() {
  var userGuess = $('#input').val();
  var words = numberInWords(userGuess);
  if (words || words === '') {
    $('#unit').html(`${words} ${currentProblem.unit}`);
  } else {
    $('#unit').html('We only support number inputs, currently');
  }
});

function calculateAnswer() {
  var userAnswer = $('#input').val();
  recordResponse(currentProblem.id, userAnswer);
  var correctAnswer = currentProblem.solution;
  var correctAnswerInWords = numberInWords(String(correctAnswer));
  var correctAnswerDisplay =
    correctAnswer.toLocaleString() +
    ' ' +
    currentProblem.unit +
    ' <br /> (' +
    correctAnswerInWords +
    ')';

  return calcText(correctAnswer, userAnswer, correctAnswerDisplay);
}

$(function() {
  $('#another').click(function() {
    createProblem();
    $('#output').hide();
    $('#output').html('&nbsp;');
    $('#input').val('');
    $('#submit').show();
    $('#another').hide();
  });
});
