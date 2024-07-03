import React,{useState,useEffect} from "react";
import "./style.css"
const ProgressBar = () => {
    const [value,setValue]=useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setValue((value) => {
                if (value < 100) {
                    return value + 1;
                } else {
                    clearInterval(interval);
                    return value;
                }
            });
        }, 100);
        return () => clearInterval(interval); 

    },[])
  return (
    
        
        <div className="progress">
            <span  >{value}%</span>
            <div style={{width:`${value}%`}}></div>
        </div>

    
  )
};

export default ProgressBar;
