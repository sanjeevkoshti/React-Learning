import { useState } from "react";

export default function CommentForm() {

    let [formData, setFormData] = useState({
        userName: "",
        remarks: "",
        rating: "5",
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
            userName: "",
            remarks: "",
            rating: "5",
        })

    }
    return (
        <>
            <form style={formStyle} onSubmit={handleSubmit}>
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
                <label htmlFor="remarks" style={{ fontSize: "1.8rem", color: "white" }}>Remarks : </label>
                <textarea
                    placeholder="Enter few remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    id="remarks"
                    name="remarks"
                    style={{ fontSize: "1.5rem" }}
                >
                </textarea>
                </div>
                <div>
                <label htmlFor="rating" style={{ fontSize: "1.8rem", color: "white" }}>Rating : </label>
                <input
                    type="number"
                    placeholder="Enter rating"
                    value={formData.rating}
                    onChange={handleChange}
                    id="rating"
                    name="rating"
                    min={0}
                    max={5}
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