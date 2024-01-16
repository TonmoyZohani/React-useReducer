import React, { useEffect } from "react";

const Timer = ({ secondsRemain, dispatch }) => {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id)
  }, [dispatch]);

  return <div>{secondsRemain}</div>;
};

export default Timer;
