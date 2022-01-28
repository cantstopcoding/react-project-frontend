import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={increment}>{count}</button>
    </>
  );
};

export default LikeButton;
