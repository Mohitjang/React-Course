import React, { forwardRef, useImperativeHandle, useRef } from "react";

// without open attribute/ using forward ref feature of react
// when we use open prop inside the dialog element than the bg is not blurred
// to get that we must use showModal method to show this dialog
// for that we need access of this component inside the timer challenge component
// to make this possible we can use ref hook of react.

// using useImparativeHandle to 
// define method for component to use from outside


const ResultModal = forwardRef(({result, targetTime }, ref) => {

    const dialogC = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialogC.current.showModal()
            }
        }

    })


  return (
    <dialog className="result-modal" ref={dialogC}>
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
