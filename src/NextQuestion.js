import React from "react";
// thsi

const NextQuestion = ({ dispatch, answer }) => {
  console.log(answer);

  if (answer === null) {
    return;
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};

export default NextQuestion;
