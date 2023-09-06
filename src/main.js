// query selector variables go here 👇

// note: you have access to a variable called `data` - you can see the array and its elements in the data.js file

// event listeners go here 👇

// functions and event handlers go here 👇



// Leta's sloppy first draft

const phrase = document.querySelector('.phrase');
const choices = document.querySelector('.choices');
const guess1 = document.querySelector('.guess1');
const guess2 = document.querySelector('.guess2');
const guess3 = document.querySelector('.guess3');
const answer = document.querySelector('.answer');
const reset = document.querySelector('.reset');
let feedback = document.querySelector('.feedback');
let currentQuestion = data.shift();

// this function is impure because of the randomizing nature of the algorithm
function shuffle(array) { // would provide this function to students
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function updateQuestion() { // because of the randomizing nature of shuffle, this would not be a pure function
  shuffle(data);
  currentQuestion = data.shift();
}

function renderQuestion() {
  phrase.innerText = currentQuestion.phrase;
  guess1.innerText = currentQuestion.options[0];
  guess1.removeAttribute('disabled');
  guess2.innerText = currentQuestion.options[1];
  guess2.removeAttribute('disabled');
  guess3.innerText = currentQuestion.options[2];
  guess3.removeAttribute('disabled');
  answer.innerText = 'Take a guess!';
  feedback.innerText = 'What language do you think this phrase is in?';
  reset.setAttribute('hidden', 'true');
}

function renderFeedback(outcome) {
  answer.innerText = 'Answer: ' + currentQuestion.answer;
  reset.removeAttribute('hidden');
  guess1.setAttribute('disabled', 'true');
  guess2.setAttribute('disabled', 'true');
  guess3.setAttribute('disabled', 'true');

  if (outcome === 'correct') {
    feedback.innerText = 'You got it right!';
  } else {
    feedback.innerText = 'Sorry, better luck next time!';
  }
}

function onGuess(event) {
  let guess = event.target.innerText;
  if (guess === currentQuestion.answer) {
    renderFeedback('correct');
  } else {
    renderFeedback('incorrect');
  }
}

function onReset() {
  updateQuestion();
  renderQuestion();
}

window.onload = renderQuestion;
choices.addEventListener('click', onGuess);
reset.addEventListener('click', onReset);