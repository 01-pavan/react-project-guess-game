import GameHeader from "./components/GameHeader";
import GameInput from "./components/GameInput";
import GameStats from "./components/GameStats";
import { useState } from "react";
function App() {
  const [random, setRandom] = useState(0);
  const [isCorrect, setIscorrect] = useState(false);
  const [stats, setStats] = useState({
    text: "",
    yourScore: 0,
    highScore: 0,
  });
  return (
    <div>
      <GameHeader random={random} setRandom={setRandom} isCorrect={isCorrect} />
      <div className="container2">
        <GameInput
          random={random}
          setIscorrect={setIscorrect}
          setStats={setStats}
          isCorrect={isCorrect}
        />
        <GameStats stats={stats} />
      </div>
    </div>
  );
}

export default App;
