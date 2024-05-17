import React from 'react';

function GameInput(props) {
  const { guess, setGuess, attemptGuess, disableGameInput } = props;

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          if (guess.length === 5) {
            attemptGuess(guess);
          }
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          disabled={disableGameInput}
          onChange={(event) => {
            event.preventDefault(); //don't refresh page after enter is pressed
            setGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default GameInput;
