import React from "react";

const Questions = ({ questions }) => {
  console.log(questions);

  return (
    <div>
      <h4>{questions?.question}</h4>
      <div className="options">
        {questions?.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
