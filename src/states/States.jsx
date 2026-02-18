import NumCounter from "./NumCounter.jsx";
import LikeBtn from "./LikeBtn.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";

export default function States() {
    return (
        <div style={styles}>
            <TodoList/>
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