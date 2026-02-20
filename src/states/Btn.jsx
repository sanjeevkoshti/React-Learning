import "./Lottery.css";

export default function Btn({action}){
    return(
        <button className="buyBtn" onClick={action}>Buy New Ticket</button>
    );
}