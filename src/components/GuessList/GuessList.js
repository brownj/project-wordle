import React from 'react';
import Guess from '../Guess';

function GuessList(props) {
  const { guessList, answer } = props;

  // make an array to hold 6 potential guesses/inputs
  let fullList = [];

  // fill that array with the existing guesses, if any.
  guessList.forEach((guess) => {
    fullList.push(guess);
  });

  // fill out rest of that array up to 6 inputs with empty strings.
  for (let i = guessList.length; i < 6; i++) {
    fullList.push('');
  }

  // now create the list with the 6 total guesses (including blanks)
  return (
    <div className="guess-results">
      {fullList.map((guess) => {
        return (
          <Guess key={crypto.randomUUID()} guess={guess} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessList;
