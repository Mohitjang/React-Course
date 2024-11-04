import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// without open attribute/ using forward ref feature of react
// when we use open prop inside the dialog element than the bg is not blurred
// to get that we must use showModal method to show this dialog
// for that we need access of this component inside the timer challenge component
// to make this possible we can use ref hook of react.

// using useImparativeHandle to
// define method for component to use from outside

const ResultModal = forwardRef(
  ({ targetTime, timeRemaining, onReset }, ref) => {
    const dialogC = useRef();
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const userLost = timeRemaining <= 0;
    let score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialogC.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog className="result-modal" ref={dialogC} onClose={onReset}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>You Score: {score}</h2>}

        <p>
          The Target Time was
          <strong>
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedTimeRemaining} seconds left.</strong>
        </p>
        <form action="" method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>, document.getElementById("modal")
    );
  }
);

export default ResultModal;
