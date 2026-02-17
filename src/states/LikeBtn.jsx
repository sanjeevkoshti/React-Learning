import { useState } from "react";

export default function LikeBtn(){
    const [isLiked, setIsLiked]=useState(false);
    function togleLike(){
        setIsLiked(!isLiked);
    }
    return(
        <>
        <p style={styles} onClick={togleLike}>
            {isLiked ? <i className="fa-solid fa-heart" style={{color:"red"}}></i> : <i className="fa-regular fa-heart" style={{color:"black"}}></i>}
        </p>
        </>
    );
}
let styles={
    cursor:"pointer",
    fontSize:"2rem",
    margin:"1rem"
}