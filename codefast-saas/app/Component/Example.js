//useState hook is a special function to create stateful variables
// able to update the  page
//its a varibale when we update change the entire appereance of the page

import { useState } from "react";

//above line is same as below
// import React from "react";
// const { useState } = React;
//useState is a function that returns an array with two elements
export const Example = () => {
  // Hook should be at the root of the component

  const [counter, setCounter] = useState(0);
  //const setArray = useState(0);
  //const [counter, setCounter] = setArray
  //we can also write above line const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="py-48 px-8 flex items-center gap-4">
      <button className="btn" onClick={decrementCounter}>
        -Remove
      </button>

      <div className="text-3xl font-bold w-12 text-center">{counter}</div>

      <button className="btn" onClick={decrementCounter}>
        -Remove
      </button>
    </div>
  );
};
