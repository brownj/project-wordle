import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import GuessList from '../GuessList';
import GameEndBanner from '../GameEndBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [disableGameInput, setDisableGameInput] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);
  const [gameLost, setGameLost] = React.useState(false);

  let result = 'in-progress';
  if (gameWon) {
    result = 'win';
  } else if (gameLost) {
    result = 'lose';
  }

  function attemptGuess(newGuess) {
    const newGuessCount = guessCount + 1;
    setGuessCount(newGuessCount);

    let newGuessList = [...guessList, newGuess];
    setGuessList(newGuessList);

    // if correct or past the number of guesses allowed, disable game
    if (newGuess === answer) {
      setGameWon(true);
      setDisableGameInput(true);
    }

    if (newGuessCount >= NUM_OF_GUESSES_ALLOWED) {
      setGameLost(true);
      setDisableGameInput(true);
    }

    setGuess('');
  }

  return (
    <>
      <GameEndBanner
        result={result}
        correctAnswer={answer}
        numGuesses={guessCount}
      />
      <GuessList result={result} guessList={guessList} answer={answer} />
      <GameInput
        guess={guess}
        setGuess={setGuess}
        attemptGuess={attemptGuess}
        disableGameInput={disableGameInput}
      />
    </>
  );
}

export default Game;
