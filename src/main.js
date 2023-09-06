// query selector variables go here 👇

// event listeners go here 👇

// functions and event handlers go here 👇
// We've provided some to get you started
// note: you have access to a variable called `data` - you can see the array and its elements in the data.js file
let currentQuestion = data.shift();
let guesses = { correct: 0, incorrect: 0 };

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function updateQuestion() {
  shuffle(data);
  currentQuestion = data.shift();
}

