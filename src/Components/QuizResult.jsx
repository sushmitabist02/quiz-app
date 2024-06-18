import React from "react";

const QuizResult = (props) => {
  return (
    <>
      <div className="show-score">
        Your Score <br />
        {props.score}/{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
};

export default QuizResult;
