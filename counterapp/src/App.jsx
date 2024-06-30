import React, { useState } from "react";

const App = () => {
  const [counter,setCounter]=useState(0)
  return(
    <div className="container">

      <div className="counter">{counter}</div>
      <div className="buttons">
         <button onClick={()=>setCounter(counter+1)}>Increment</button>
         <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
      </div>


    </div>
  )
};

export default App;
