import TicketNum from "./TicketNum";

export default function({ticket}){
    return(
        <div style={ticketStyle}>
            {ticket.map((num, idx) =>(
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}

let ticketStyle={ 
    display:"flex",
    margin: "1rem 0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "1rem",
    fontSize: "1.8rem",
    fontWeight: "bold",
    border: "3px solid rgb(155, 255, 237)",
    padding: "0 3rem",
    borderRadius: "50px",
}