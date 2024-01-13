import React from "react";

const StartScreen = ({ questionsLength }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsLength} question to test your React mastery</h3>
      <button>Let's Start</button>
    </div>
  );
};

export default StartScreen;
