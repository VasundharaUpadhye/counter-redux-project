import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/actions/actions";

const Counter = () => {
  const dispatch = useDispatch();

  const { count } = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
