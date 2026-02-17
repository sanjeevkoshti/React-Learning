import { useState } from "react";

export default function LikeBtn(){
    const [isLiked, setIsLiked]=useState(false);
    function togleLike(){
        setIsLiked(!isLiked);
    }
    return(
        <>
        <p style={styles} onClick={togleLike}>
            {isLiked ? <i class="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </p>
        </>
    );
}
let styles={
    cursor:"pointer",
    fontSize:"2rem",
    color:"red",
    margin:"1rem"
}