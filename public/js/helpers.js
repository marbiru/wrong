function calcText(correctAnswer, userAnswer, correctAnswerDisplay) {
  var factor = userAnswer / correctAnswer;

  return `The correct answer is: <br />
    ${correctAnswerDisplay}
    <br /><br /> ${displayAccuracyText(correctAnswer, userAnswer, factor)}`;
}

function displayAccuracyText(correctAnswer, userAnswer, factor) {
  let correctDivUser = correctAnswer / userAnswer;

  if (correctDivUser > 0.5 && correctDivUser < 2) {
    return `You got close – hmphh, lucky guess`;
  } else if (correctDivUser > 0.1 && correctDivUser < 1) {
    return `Not so bad – you're only high by a factor of ${Math.round(
      factor
    ).toLocaleString()}`;
  } else if (correctDivUser > 1 && correctDivUser < 10) {
    return `<br /><br /> Not so bad – you're only low by a factor of ${Math.round(
      1 / factor
    ).toLocaleString()}`;
  } else if (correctAnswer < userAnswer) {
    return `<br /><br /> You are high by a factor of ${Math.round(
      factor
    ).toLocaleString()}`;
  } else if (correctAnswer > userAnswer) {
    return `<br /><br /> You are low by a factor of ${Math.round(
      1 / factor
    ).toLocaleString()}`;
  } else {
    return 'Something bad happened';
  }
}

function recordResponse(problem_id, response_value) {
  if (!response_value.match(/\d/)){
    console.log("invalid response attempted")
    return
  }

  const data = JSON.stringify({
    problem_id,
    response_value,
  });

  fetch('/record_answer', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: data,
  });
}

function serverGet(route, options = null) {
  return fetch(route, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

function storeProblemsInSession() {
  serverGet('/init').then(json => setInSession('problems', json));
}

function popProblemFromSession() {
  var problems = getFromSession('problems');
  if (problems.length < 1) {
    return 'empty';
  }
  var problem = problems[problems.length - 1];
  var popped = problems.slice(0, -1);

  setInSession('problems', popped);
  return problem;
}

function setInSession(key, val) {
  sessionStorage.setItem(key, JSON.stringify(val));
}

function getFromSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
