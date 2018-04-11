const lexicon = require('./lexicon')
let solution = pickRandomWord();
let guessList = [];

function pickRandomWord () {
  let randomNum = Math.floor(Math.random()*lexicon.getWordCount())
  let word = lexicon.getWord(randomNum);
  lexicon.removeWord(randomNum);  //for future games
  return word;
}

function makeDashes () {
  let dashes = '';
  for (let i = 0; i<solution.length; i++) {
    dashes = dashes.concat('_ ')
  }
  return dashes;
}

function checkGuess(str) {
  let guess = str.toUpperCase();
  guessList.push(guess);
  let check = (guess === solution) ? true : false;
  return check;
}
