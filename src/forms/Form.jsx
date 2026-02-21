import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("");
    let [userName, setUserName] = useState("");

    let handleFullName = (e) => {
        setFullName(e.target.value);
    }
    let handleUserName = (e) => {
        setUserName(e.target.value);
    }
    return (
        <>
            <form style={formStyle}>
                <div>
                <label htmlFor="fullName" style={{ fontSize: "1.8rem", color: "white" }}>Full Name : </label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={handleFullName}
                    id="fullName"
                    style={{ fontSize: "1.5rem" }}
                />
                </div>
                
                <div>
                <label htmlFor="userName" style={{ fontSize: "1.8rem", color: "white" }}>Username : </label>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={userName}
                    onChange={handleUserName}
                    id="userName"
                    style={{ fontSize: "1.5rem" }}
                />
                </div>
                <button style={{ fontSize: "1.5rem", cursor: "pointer" }}>Submit</button>
            </form>
        </>
    );
}

let formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
}