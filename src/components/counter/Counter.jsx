"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/redux/counterSlice";
import "./counter.scss";

const Counter = () => {
  let state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <button
        className="counter__btn"
        disabled={state === 0}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{state}</span>
      <button className="counter__btn" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Counter;
