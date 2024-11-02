import React, { forwardRef } from "react";

// without open attribute/ using forward ref feature of react
// when we use open prop inside the dialog element than the bg is not blurred
// to get that we must use showModal method to show this dialog
// for that we need access of this component inside the timer challenge component
// to make this possible we can use ref hook of react.

const ResultModal = forwardRef(({result, targetTime }, ref) => {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result} </h2>
      <p>
        The Target Time was
        <strong>
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form action="" method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
