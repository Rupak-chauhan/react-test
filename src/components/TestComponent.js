import React from "react";
// import { demoContext } from "../contexts/DemoContext";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  interfareCounter,
} from "../reducers/counterSlice";

const TestComponent = () => {
  // const DemoContext = useContext(demoContext);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  console.warn("Count amount => ", count);

  const handleInterfareCounter = () => {
    console.warn("Inside handleInterfareCounter");
    const dataJson = {
      name: "interfareCounter",
      action: "increment",
    };
    dispatch(interfareCounter(dataJson));
    console.log("After");
  };

  const incrementHandler = () => {
    console.log("Increment Handler");
    dispatch(increment());
  };
  const decrementHandler = () => {
    console.log("Decrement handler");
    dispatch(decrement());
  };
  const incrementByAmountHandler = () => {
    console.log("Increment by amount handler");
    dispatch(incrementByAmount(100));
  };
  // throw new Error("Something went wrong");
  return (
    <React.Fragment>
      <h2>Welcome to the test Component.</h2>
      
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={incrementByAmountHandler}>incremnt by amount</button>
      <button onClick={handleInterfareCounter}>interfare counter</button>
    </React.Fragment>
  );
};

export default TestComponent;
