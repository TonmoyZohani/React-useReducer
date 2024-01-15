import React from "react";

const Progress = ({ questions, index, points, maxPossiblePoints }) => {
  console.log(questions);

  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{questions.length}
      </p>

      <p>
        <strong>{index + 1}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
