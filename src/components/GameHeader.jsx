import { useState, useEffect } from "react";
function GameHeader() {
  const isCorrect = false;
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 20) + 1);
  }, []);
  console.log(random);
  return (
    <div className="container">
      <h1>Guess My Number</h1>
      <span className="result">{isCorrect ? random : "?"}</span>
    </div>
  );
}
export default GameHeader;
