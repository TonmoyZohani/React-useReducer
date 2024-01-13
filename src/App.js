import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, action) => {
  switch ((action.type)) {
    case "dataReceived":
      return { ...state, questions: action.payload };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }));
  }, []);

  console.log(state);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
