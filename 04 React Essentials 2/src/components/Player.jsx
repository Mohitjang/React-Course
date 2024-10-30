import { useState } from "react";

function Player ({ initialName, symbol , isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [statePlayerName, setStatePlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setStatePlayerName(event.target.value);
  }

  let playerNameElement = <span className="player-name">{statePlayerName}</span>;

  if (isEditing) {
    playerNameElement = (
        <input
          onChange={handleChange}
          type="text"
          required
          value={statePlayerName}
        />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
