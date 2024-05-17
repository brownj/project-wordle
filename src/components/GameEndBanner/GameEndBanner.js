import React from 'react';

function GameEndBanner(props) {
  const { result, correctAnswer, numGuesses } = props;

  const winResult = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );

  const loseResult = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{correctAnswer}</strong>.
      </p>
    </div>
  );

  let componentToShow = <></>; //for 'in-progress'
  if (result === 'win') {
    componentToShow = <>{winResult}</>;
  } else if (result === 'lose') {
    componentToShow = <>{loseResult}</>;
  }

  return <>{componentToShow}</>;
}

export default GameEndBanner;
