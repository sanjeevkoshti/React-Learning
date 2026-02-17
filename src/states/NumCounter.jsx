import { useState } from "react";

export default function NumCounter() {
    const [count, setCount]=useState(0);
    return (
        <div style={styles}>
            <h1>NumCounter</h1>
            <h2>Count: {count}</h2>
            <div style={{display:"flex",gap:"1rem",flexDirection:"row"}}>
                <button style={incbtnstyle} onClick={()=>{setCount(count+1)}}>Increment</button>
                <button style={decbtnstyle} onClick={()=>{setCount(count-1)}}>Decrement</button>
            </div>
        </div>
    );
}


let styles={
    backgroundColor:"#f0f0f0",
    padding:"20px",
    borderRadius:"10px",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    gap:"2rem",
}
let incbtnstyle={
    padding:"10px",
    borderRadius:"5px",
    border:"none",
    backgroundColor:"#4CAF50",
    color:"white",
    cursor:"pointer"
}
let decbtnstyle={
    padding:"10px",
    borderRadius:"5px",
    border:"none",
    backgroundColor:"#f44336",
    color:"white",
    cursor:"pointer"
}
