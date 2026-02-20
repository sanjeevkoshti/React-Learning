import { useState } from "react";
import "./Lottery.css";
import Ticket from "./Ticket.jsx";
import Btn from "./Btn.jsx";
import { genTicket } from "./LotteryFun.js"

export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }
    return(
        <div className="lottery">
            <h1>Lottery Game!</h1>
            <Btn action={buyTicket}/>
            <Ticket ticket={ticket}/>
            <h2 style={{color: "green", fontSize: "1.8rem"}}>{isWinning && "Congratulations, you won! 🎉"}</h2>
        </div>
    );
}