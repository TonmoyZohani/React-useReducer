import React from "react";

const Questions = ({ questions, dispatch, answer }) => {
  console.log(questions);

  return (
    <div>
      <h4>{questions?.question}</h4>
      <div className="options">
        {questions?.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
