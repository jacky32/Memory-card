import "./App.css";
import Board from "./components/Board";
import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const addOne = () => setCount(count + 1);

  //   document.addEventListener("click", addOne);
  // }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <div>aa</div>
        {/* <div>You clicked {count} times</div> */}
      </header>
      <div className="App-board">
        <Board />
      </div>
    </div>
  );
}

export default App;
