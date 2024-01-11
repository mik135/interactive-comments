import { useState } from "react"
// eslint-disable-next-line react/prop-types
export default function Counter({score}) {
  const [modScore, setModeScore] = useState(score);
  function increaseScore() {
    return setModeScore(modScore + 1);
  }
  function decreaseScore() {
    if(modScore > 0) {
      return setModeScore(modScore - 1);
    }
  }
  return (
    <div className="counter">
      <button onClick={increaseScore} style={{cursor: "pointer"}}><img src="images/icon-plus.svg" alt="" /></button>
      <p>{modScore}</p>
      <button onClick={decreaseScore} style={{cursor: "pointer"}}><img src="images/icon-minus.svg" alt="" /></button>
    </div>
  )
}
