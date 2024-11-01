import { useState } from "react";

// using state

export default function Player() {

  const [playerName, setPlayerName] = useState("USER")
  const [enteredPlayerName, setEnteredPlayerName] = useState("USER")

  function handleChange(e){
    setEnteredPlayerName(e.target.value)
  }

  function handleClick(){
    setPlayerName(enteredPlayerName)
  }


  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "user" }</h2>
      <p>
        <input type="text" onChange={handleChange}/> 
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
