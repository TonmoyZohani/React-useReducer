import React, { useEffect } from "react";

const Timer = ({ secondsRemain, dispatch }) => {
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
  }, [dispatch]);

  return <div>{secondsRemain}</div>;
};

export default Timer;
