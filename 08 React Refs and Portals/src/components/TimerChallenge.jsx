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
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef()
  
  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal()
    }, target * 1000);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
    <ResultModal ref={dialog} result={"Lost"} targetTime={target} />
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {target} second{target > 1 && "s"}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;
