import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./LotteryFun.js"

export default function Lottery(){
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket=()=>{
        setTicket(genTicket(3));
    }
    return(
        <div className="lottery">
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button className="buyBtn" onClick={buyTicket}>Buy New Ticket</button>
            <h2 style={{color: "green", fontSize: "1.8rem"}}>{isWinning && "Congratulations, you won! 🎉"}</h2>
        </div>
    );
}