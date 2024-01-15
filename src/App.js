import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Questions from "./Questions.js";
import NextQuestion from "./NextQuestion.js";
import Progress from "./Progress.js";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const currentQus = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          currentQus.correctOption === action.payload
            ? state.points + currentQus?.points
            : state?.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    default:
      throw new Error("Action Unknown");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { questions, status, index, answer, points } = state;
  let questionsLength = questions.length;
  let maxPossiblePoints = questions.reduce((acc, cur) => {
    return acc + cur.points;
  }, 0);

  console.log(maxPossiblePoints);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  console.log(state);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionsLength={questionsLength} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              questions={questions}
              index={index}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questions
              questions={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />

            <NextQuestion dispatch={dispatch} answer={answer} points={points} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
