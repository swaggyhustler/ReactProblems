import React ,{useState}from "react";

const ToggleSwitch = () => {
    const [status,setStatus]=useState(false)
    
  return (
    <div>
        <div>
          click to  <button  onClick={()=>{setStatus(!status)}}>{status?"OFF":"ON"}</button>
        </div>
        <div>
            current status : {status?"ON":"OFF"}
        </div>


    </div>
  )
};

export default ToggleSwitch;
