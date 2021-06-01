import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // Here, the empty array is my default value
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    /**
     * I'm saying, hey, listen, if the person matches the idea that I'm passing in, then of course, remove it.
     */
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/** 
       * Now, the problem is going to be that we right away invoke it, and that's not what we're looking for. So what we would want is only to invoke it once we click on it. And remember, the solution was to set up our arrow function first.
       * 
       * So we invoking it. And that's why we always need to set up the Arrow function, otherwise it will run right away. So essentially when we ran the rap and that it will invoke it online, in that case, we are not running it when we're clicking on a function we are running at the moment, our app runs and that's not what we're looking for.
      */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
