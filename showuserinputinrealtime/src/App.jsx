import React, { useState } from "react";

const App = () => {
  const [input,setInput]=useState(null)
  const clearHandler=(e)=>{
    const input=document.getElementById("input")
    input.value=null
    setInput(null)
  }
  return <div>
      <div style={{padding:"10px"}}>
        <label htmlFor="input">Enter Input</label>
        <input id="input" type="text"  onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div>
        <p>{input}</p>
      </div>

  </div>;
};

export default App;
