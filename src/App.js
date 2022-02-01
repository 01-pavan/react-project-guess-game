import GameHeader from "./components/GameHeader";
import GameInput from "./components/GameInput";
import GameStats from "./components/GameStats";
function App() {
  return (
    <div>
      <GameHeader />
      <div className="container2">
        <GameInput />
        <GameStats />
      </div>
    </div>
  );
}

export default App;
