import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/Board.css";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [clickedChildren, setClickedChildren] = useState([]);
  const [numbers, setNumbers] = useState([
    1, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 19,
  ]);

  const handleClick = (e) => {
    const newChild = e.target;
    toggleAnimations();
    // addRotateOutAnimation();
    // addRotateInAnimation();
    if (clickedChildren.includes(newChild)) {
      resetCounter();
    } else {
      addChildToCounter(newChild);
    }
  };

  useEffect(() => {
    if (currentCount >= bestCount) setBestCount(currentCount);
  }, [currentCount, bestCount]);

  const resetCounter = () => {
    setClickedChildren([]);
    setCurrentCount(0);
  };

  const addChildToCounter = (newChild) => {
    setClickedChildren([...clickedChildren, newChild]);
    setCurrentCount(currentCount + 1);
  };

  const toggleAnimations = () => {
    toggleAnimation("img.Card-cardback", "Card-rotateout");
    toggleAnimation("img.Card", "Card-rotatein");
  };

  const toggleAnimation = (node, toggleClass) => {
    const list = document.querySelectorAll(node);
    if (list.length === 0) {
      return;
    } else {
      list.forEach((node) => {
        node.classList.remove(toggleClass);
        setTimeout(() => {
          node.classList.add(toggleClass);
        }, 10);
      });
    }
  };

  const addRotateOutAnimation = () => {
    const list = document.querySelectorAll("img.Card-cardback");
    if (list.length === 0) {
      return;
    } else {
      list.forEach((node) => {
        node.classList.remove("Card-rotateout");
        setTimeout(() => {
          node.classList.add("Card-rotateout");
        }, 10);
      });
    }
  };

  const addRotateInAnimation = () => {
    const list = document.querySelectorAll("img.Card");
    if (list.length === 0) {
      return;
    } else {
      list.forEach((node) => {
        node.classList.remove("Card-rotatein");
        setTimeout(() => {
          node.classList.add("Card-rotatein");
        }, 10);
      });
    }
  };

  const shuffleNumbers = () => {
    const newNumbers = numbers;
    shuffleArray(newNumbers);
    if (newNumbers !== numbers) {
      setNumbers(newNumbers);
    }

    return numbers.map((number) => {
      return <Card key={number} number={number} handleClick={handleClick} />;
    });
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
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
