import React from "react";

const Progress = ({ questions, index }) => {
  console.log(questions);

  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{questions.length}
      </p>
    </header>
  );
};

export default Progress;
