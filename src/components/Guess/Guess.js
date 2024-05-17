import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess(props) {
  const { guess, answer } = props;

  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((i) => {
        let cssClassName = 'cell';
        if (guessResult) {
          cssClassName += ' ' + guessResult[i].status;
        }
        return (
          <span key={crypto.randomUUID()} className={cssClassName}>
            {guess[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
