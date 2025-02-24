//useState hook is a special function to create stateful variables 
// able to update the  page 

import {useState} from 'react';


import React from "react";
const {useState} = React; 
export const Example =() => {
// Hook should be at the root of the component 

const [counter, setCounter] = useState(0);

const [counter, setCounter] = useState(0);

const incrementCounter = () => {
  setCounter(counter + 1);

};

const decrementCounter = () => {
  setCounter(counter - 1);
};

return (


)