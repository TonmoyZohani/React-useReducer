import React from "react";

const Questions = ({ questions, dispatch, answer }) => {
  console.log(questions);

  const hasAnswer = answer !== null;

  return (
    <div>
      <h4>{questions?.question}</h4>
      <div className="options">
        {questions?.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswer
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
