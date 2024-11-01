// hooks 
import { useRef, useState } from "react";

// using refs

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("")
  const playerName = useRef();

  function handleChange() {}

  function handleClick() {
    // setEnteredPlayerName(playerName.current)
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : "user"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button> 
      </p>
    </section>
  );
}
