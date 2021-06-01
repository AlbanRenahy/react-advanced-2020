import React from "react";

/**
 * 
 * Now, the problem is that we are not rendering the component. So we change the value and we're not rendering the component. That's the reason why we cannot see any changes.
Now, the second thing is that we have no way to preserve this value in between the renters as well. So essentially, we would want two things. We would want to keep the value between the renters, but also we would want to trigger that. Or and this is where the U.S. state comes into play, where it will allow us to do just that.
 */

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () =>{
    title = 'hello people'
    console.log(title);
  }
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </>
  );
};

export default ErrorExample;
