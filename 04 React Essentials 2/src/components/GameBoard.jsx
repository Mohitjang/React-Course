// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, turns }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(row, col) {
  //     // const copyBoard = (...gameBoard.map((innerArray)=> (...innerArray)))
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[row][col] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     // call the function which changes the active player
  //     // get that function here using props
  //     onSelectSquare();
  //   }

  let gameBoard = initialGameBoard;

  for (const turn of turns) {

    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    // console.log(gameBoard[row][col])
    // console.log(gameBoard)
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}

    </ol>
  );
}
export default GameBoard;
