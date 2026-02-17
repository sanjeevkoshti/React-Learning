import NumCounter from "./NumCounter.jsx";
import LikeBtn from "./LikeBtn.jsx";

export default function States() {
    return (
        <div style={styles}>
            <LikeBtn/>
            {/* <NumCounter/> */}
        </div>
    );
}

let styles={
    backgroundColor:"#f0f0f0",
    padding:"20px",
    borderRadius:"10px",
    textAlign:"center",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
}