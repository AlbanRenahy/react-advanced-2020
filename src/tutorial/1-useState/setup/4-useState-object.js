import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  // Solution with multiple state values
  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    /**
     * For example, if you're using the object, then you need to make sure that you always, always use the spread operator.Or there's also some other older setup where essentially you copy the old values from the state value and then you just decide which one you would want to choose.
     */
    if (person.message === "random message") {
      setPerson({ ...person, message: "hello world" });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
