import { useState } from "react";
import "./Lottery.css";
import Ticket from "./Ticket.jsx";
import { genTicket, sum } from "./LotteryFun.js"

export default function Lottery({n=3, winSum=15}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winSum;
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div className="lottery">
            <h1>Lottery Game!</h1>
            <button className="buyBtn" onClick={buyTicket}>Buy New Ticket</button>
            <Ticket ticket={ticket}/>
            <h2 style={{color: "green", fontSize: "1.8rem"}}>{isWinning && "Congratulations, you won! 🎉"}</h2>
        </div>
    );
}