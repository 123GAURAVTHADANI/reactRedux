import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, themeToggle } from "./Actions/actions";
import Child from "./Child";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const counter = useSelector((state) => state.counterReducer.counter);
  const theme = useSelector((state) => state.themeReducer.theme);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  // const handleDecrement = () => {
  //   dispatch({ type: DECREMENT, number: Number(value) });
  // };
  const handleTheme = () => {
    dispatch(themeToggle());
  };

  return (
    <div style={{ backgroundColor: theme == "dark" ? "white" : "black" }}>
      <h1>Learning React-Redux!!</h1>
      <h3>{counter}</h3>
      {/* <input
        type="number"
        placeholder="Value..."
        onChange={(e) => setValue(e.target.value)}
      /> */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleTheme}>Theme Toggle</button>
    </div>
  );
}

export default App;
