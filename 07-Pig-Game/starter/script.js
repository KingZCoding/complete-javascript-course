'use strict';

// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const playerScore0 = document.querySelector('#score--0');
const playerScore1 = document.querySelector('#score--1');
// selecting current player
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
// selecting dice
const dice = document.querySelector('.dice');
// selecting btns
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  current0.textContent = 0;
  current1.textContent = 0;
  playerScore0.textContent = 0;
  playerScore1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  dice.classList.add('hidden');
};
init();

const switchPlayer = function () {
  //   switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const setScore = function () {};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll
    const rollDice = Math.floor(Math.random() * 6) + 1;
    // 2. display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${rollDice}.png`;

    // 3. check for rolled 1: if true swich to next player
    if (rollDice !== 1) {
      // add dice to curent score
      currentScore += rollDice;
      //   select score on which players turn it is
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0.textContent = currentScore; //Change later to display to current player
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if score is 100 and end game
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      dice.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
