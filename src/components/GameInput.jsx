import { useState } from "react";
function GameInput({ random, setIscorrect, setStats, isCorrect }) {
  const [value, setValue] = useState(0);
  const [yScore, setYscore] = useState(20);
  const [hScore, sethscore] = useState(20);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (random === Number(value)) {
      console.log("matched");
      setIscorrect(true);
      setYscore(yScore + 2);
      sethscore(yScore);
      userStats(yScore, hScore);
    } else {
      console.log("try again");
      setIscorrect(false);
      setYscore(yScore - 2);
      sethscore(yScore);
      userStats(yScore, hScore);
    }
  };
  const userStats = (yScore, hScore) => {
    console.log(isCorrect);
    setStats({
      text: `${isCorrect ? "MATCHED" : "TRY AGAIN"}`,
      yourScore: yScore,
      highScore: hScore,
    });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} />
        <button type="submit" className="btn">
          CHECK
        </button>
      </form>
    </div>
  );
}
export default GameInput;
