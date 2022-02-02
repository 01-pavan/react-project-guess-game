function GameStats({ stats, isCorrect }) {
  const { text, yourScore, highScore } = stats;
  console.log(text);
  return (
    <div className="container3">
      <h2>{text}</h2>
      <h2>Your score::{yourScore}</h2>
      <h2>High score:: {highScore}</h2>
    </div>
  );
}
export default GameStats;
