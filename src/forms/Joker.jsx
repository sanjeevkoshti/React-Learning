import { useState, useEffect } from "react";

export default function Joker(){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({})

    const getJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke(jsonResponse);

    }
    useEffect(() => {
        getJoke();
    }, []);
    return(
        <div style={jokerStyle}>
        <h1 style={{fontSize:"3rem"}}>Joker</h1>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button style={{fontSize:"1.5rem", cursor:"pointer"}} onClick={getJoke}>Get a Joke</button>
        </div>
    );
}

let jokerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#222",
    color: "#fff",
}