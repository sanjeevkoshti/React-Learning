import NumCounter from "./NumCounter.jsx";
import LikeBtn from "./LikeBtn.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";

export default function States() {
    return (
        <div style={styles}>
            <Lottery/>
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