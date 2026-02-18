import { useState } from 'react';

export default function LudoBoard(){
    const [moves, setMoves]=useState({blue:0, yellow:0, green:0, red:0});
    let blueMoves=()=>{
        setMoves({...moves, blue:moves.blue+Math.floor(Math.random()*6)+1})
    }
    let yellowMoves=()=>{
        setMoves({...moves, yellow:moves.yellow+Math.floor(Math.random()*6)+1})
    }
    let greenMoves=()=>{
        setMoves({...moves, green:moves.green+Math.floor(Math.random()*6)+1})
    }
    let redMoves=()=>{
        setMoves({...moves, red:moves.red+Math.floor(Math.random()*6)+1})
    }
    return(
        <div style={ludoboard}>
            <h1 style={{margin:"0.5rem 0 2rem 0"}}>Ludo Board</h1>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"0.8rem"}}>
                <p style={pstyle}>Blue Moves: {moves.blue}</p>
                <button style={bstyle} onClick={blueMoves}>Moves</button>
                <p style={pstyle}>Yellow Moves: {moves.yellow}</p>
                <button style={ystyle} onClick={yellowMoves}>Moves</button>
                <p style={pstyle}>Green Moves: {moves.green}</p>
                <button style={gstyle} onClick={greenMoves}>Moves</button>
                <p style={pstyle}>Red Moves: {moves.red}</p>
                <button style={rstyle} onClick={redMoves}>Moves</button>
            </div>
        </div>
    );
}


let bstyle={
    padding:"0.5rem 1rem",
    fontSize:"1.2rem",
    fontWeight:"bold",
    borderRadius:"5px",
    cursor:"pointer",
    backgroundColor:"blue",
    color:"white"
}

let ystyle={
    padding:"0.5rem 1rem",
    fontSize:"1.2rem",
    fontWeight:"bold",
    borderRadius:"5px",
    cursor:"pointer",
    backgroundColor:"yellow",
}

let gstyle={
    padding:"0.5rem 1rem",
    fontSize:"1.2rem",
    fontWeight:"bold",
    borderRadius:"5px",
    cursor:"pointer",
    backgroundColor:"green",
    color:"white"
}

let rstyle={
    padding:"0.5rem 1rem",
    fontSize:"1.2rem",
    fontWeight:"bold",
    borderRadius:"5px",
    cursor:"pointer",
    backgroundColor:"red",
    color:"white"
}

let ludoboard={
    backgroundColor:"gray",
    height:"90vh",
    width:"90vw",
    borderRadius:"10px",
    padding:" 0 0 1rem 0",
    display:"flex",
    flexDirection:"column",
    justifyContent:"start", 
    alignItems:"center"
}

let pstyle={
    margin:"0 0 1rem 0",
    fontSize:"1.4rem",
    fontWeight:"bold",
}