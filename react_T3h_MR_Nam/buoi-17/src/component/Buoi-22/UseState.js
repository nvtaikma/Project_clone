import React, { useState } from "react";

export default function UseState() {
  const [counter, setCouter] = useState(0);
  const handleIncrease = () => {
    console.log("+");
    setCouter(counter + 1);
  };
  const Subtraction = () => {
    console.log("-");
    setCouter(counter - 1);
    };
    
  return (
    <div className="Btn-wrapper">
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <div>{counter}</div>
      <button type="button" onClick={Subtraction}>
        Subtraction
      </button>
      <input type="number" onChange={event => setCouter(event.target.value)} value={counter} />
    </div>
  );
}
