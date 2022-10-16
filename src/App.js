import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/Board.css";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [childData, setChildData] = useState(false);
  const [clickedChildren, setClickedChildren] = useState([]);

  const handleClick = (e) => {
    const newChild = e.target;
    if (clickedChildren.includes(newChild)) {
      setClickedChildren([]);
      setCurrentCount(0);
    } else {
      setClickedChildren([...clickedChildren, newChild]);
      setCurrentCount(currentCount + 1);
    }
  };

  useEffect(() => {
    handleBestCounter();
    // return () => {
    // };
  }, [currentCount]);

  useEffect(() => {
    if (childData === true) {
    }
  }, [childData]);

  const handleBestCounter = () => {
    if (currentCount >= bestCount) setBestCount(currentCount);
  };

  const resetCounter = () => {};

  const numbers = [1, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 19];

  return (
    <div className="App">
      <header className="App-header">
        <div>aa</div>
        <div>You clicked {currentCount} times</div>
        <div>Best: {bestCount} times</div>
      </header>
      <div className="App-board">
        <div className="Board">
          {numbers.map((number) => {
            return (
              <Card
                key={number}
                number={number}
                resetClicked={setChildData}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
