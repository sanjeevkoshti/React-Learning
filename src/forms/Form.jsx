import { useState } from "react";

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    })
    let handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        })

    }

    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");

    // let handleFullName = (e) => {
    //     setFullName(e.target.value);
    // }
    // let handleUserName = (e) => {
    //     setUserName(e.target.value);
    // }
    return (
        <>
            <form style={formStyle} onSubmit={handleSubmit}>
                <div>
                <label htmlFor="fullName" style={{ fontSize: "1.8rem", color: "white" }}>Full Name : </label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    id="fullName"
                    name="fullName"
                    style={{ fontSize: "1.5rem" }}
                />
                </div>
                <div>
                <label htmlFor="userName" style={{ fontSize: "1.8rem", color: "white" }}>Username : </label>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={formData.userName}
                    onChange={handleChange}
                    id="userName"
                    name="userName"
                    style={{ fontSize: "1.5rem" }}
                />
                </div>
                <div>
                <label htmlFor="password" style={{ fontSize: "1.8rem", color: "white" }}>Password : </label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    id="password"
                    name="password"
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