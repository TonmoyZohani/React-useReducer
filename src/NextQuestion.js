import React from "react";
// thsi

const NextQuestion = ({ dispatch, answer, questions, index }) => {
  if (answer === null) {
    return;
  }

  console.log(index);

  if (index < questions.length - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === questions.length - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
};

export default NextQuestion;
