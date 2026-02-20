import NumCounter from "./NumCounter.jsx";
import LikeBtn from "./LikeBtn.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import { sum } from "./LotteryFun.js";

export default function States() {
    let winCondition = (ticket) =>{
        return sum(ticket) === 15;
    }
    return (
        <div style={styles}>
            <Lottery n={3} winCondition={winCondition}/>
            {/* <TodoList/> */}
            {/* <LudoBoard/> */}
            {/* <LikeBtn/> */}
            {/* <NumCounter/> */}
        </div>
    );
}

let styles={
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    padding:"20px",
}