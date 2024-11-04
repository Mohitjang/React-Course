import React, { useEffect, useRef, useState } from "react";
import ResultModal from "./ResultModal";

// instead of using this timer variable out of the component body, we must have to use the useRef hook:-
// problems with this approach:-
// 1. for all the instances of the component we are using the same timer variable
// 2. so every time we starting or stop the challenge
// 3. actually we are resetting the same timer .
// 4. because every time we start or stop the timer we are updating some state variables,
// 5. which causing the component to rerender, so the timer variable is created again, and we lost the old track for previous timer.
// 6. we are using same timer variable for all the component instances.

// solution:-
// 1. we need to find a way to use timer without affecting it's state when component rerender.
// 2. we want to use saperate timers for each component instance.
// 3. for this reason, react has a useRef hook.

// useRef Hook:-
// 1. it mantains its state without affecting it's state based on components rerenders
// 2. and it also doesn't cause rerender also.

// let timer;
const TimerChallenge = ({ title, target }) => {
  // steps:-
  // 1. we will start the timer
  // 2. timer starts
  // 3. setting the timer target
  // 4. timer ended
  // 5. status of the game

  const [timeRemaining, setTimeRemaining] = useState(target * 1000);

  const timer = useRef();
  const dialog = useRef();

  // in this we will use setInterval instead of setTimeOut because we need to track the remaining time.

  const timerIsActive = timeRemaining > 0 && timeRemaining < target * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleReset = ()=>{
    setTimeRemaining(target * 1000)
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      // console.log(timeRemaining);
      // console.log("....");
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  return (  
    <>
      <ResultModal
        ref={dialog}
        targetTime={target}
        timeRemaining={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 && "s"}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
