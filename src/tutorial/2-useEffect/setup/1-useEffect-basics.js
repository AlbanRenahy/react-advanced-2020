import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

/**
 * Now, again, just to reiterate use effect is used when we want to set up side-Effect, and that is some work outside of the component. So think data fetching, think listening for events, think signing up for subscriptions and stuff along those lines and then by default it will run after every rerender. And the way it works, we pass in the callback function and then whatever functionality we set up within that operation will run after every render.
 */
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  });
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
