import { useState } from "react";
import heroImg from "./assets/hero.png";
import { flashcards } from "./data/flashcards";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const currentCard = flashcards[currentIndex];

  function handleClick() {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <div>
      <h1> Flashcards Challenge </h1>

      <p>{currentCard.category}</p>
      <h2>{isFlipped === false ? currentCard.question : currentCard.answer}</h2>

      <button disabled={currentIndex === 0} onClick={handlePrevious}>
        {" "}
        Previous{" "}
      </button>

      <button
        disabled={!(currentIndex < flashcards.length - 1)}
        onClick={handleClick}
      >
        {" "}
        Next{" "}
      </button>

      <button onClick={() => setIsFlipped((prev) => !prev)}>
        {isFlipped ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
}

export default App;
