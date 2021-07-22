// @ts-nocheck
'use strict';

// Ui Selectors
const againPlay = document.querySelector('.again');
const playGame = document.querySelector('.check');

// let secretNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let scoreUI = document.querySelector('.score');
let highScoreUI = document.querySelector('.highscore');

let score = 20;
let highScore = 0;

// UI Styles
let header = document.querySelector('header');
let main = document.querySelector('body');

// Random Number Generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// Start Game
playGame.addEventListener('click', function (e) {
  e.preventDefault();
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = `You didn't Enter Any Guess Value! 😴`;
  } else if (guess === secretNumber) {
    // guess.tex = '';
    message.textContent = 'You Win';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      console.log(guess, secretNumber);
      message.textContent = guess > secretNumber ? 'To High' : 'To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

againPlay.addEventListener('click', function (e) {
  e.preventDefault();

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
