import React from "react";

const Progress = ({ questions, index, points, maxPossiblePoints, answer }) => {
  console.log(questions);

  return (
    <header className="progress">
      <progress
        max={maxPossiblePoints}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong>/{questions.length}
      </p>

      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
