import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/Board.css";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [clickedChildren, setClickedChildren] = useState([]);

  const handleClick = (e) => {
    const newChild = e.target;
    if (clickedChildren.includes(newChild)) {
      resetCounter();
    } else {
      addChildToCounter(newChild);
    }
  };

  useEffect(() => {
    handleBestCounter();
  }, [currentCount]);

  const handleBestCounter = () => {
    if (currentCount >= bestCount) setBestCount(currentCount);
  };

  const resetCounter = () => {
    setClickedChildren([]);
    setCurrentCount(0);
  };

  const addChildToCounter = (newChild) => {
    setClickedChildren([...clickedChildren, newChild]);
    setCurrentCount(currentCount + 1);
  };

  const shuffleNumbers = () => {
    const numbers = [1, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 19];
    const shuffled = shuffleArray(numbers);
    return shuffled.map((number) => {
      return <Card key={number} number={number} handleClick={handleClick} />;
    });
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>aa</div>
        <div>You clicked {currentCount} times</div>
        <div>Best: {bestCount} times</div>
      </header>
      <div className="App-board">
        <div className="Board">{shuffleNumbers()}</div>
      </div>
    </div>
  );
}

export default App;
