import { useState } from "react";

export default function TodoList(){
    const [todos, setTodos]=useState([]);
    const [newTodo, setNewTodo]=useState("");
    const addTodo=()=>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    const deleteTodo=(index)=>{
        setTodos(todos.filter((todos, idx)=>idx!=index));
    }
    return(
        <div style={styles}>
            <h1>Todo List</h1>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter Todo" style={{padding:"0.5rem 1rem", fontSize:"1.2rem", fontWeight:"bold", borderRadius:"5px", cursor:"text", margin:"1rem"}}/>
            <button onClick={addTodo} style={{padding:"0.5rem 1rem", fontSize:"1.2rem", fontWeight:"bold", borderRadius:"5px", cursor:"pointer"}}>Add Todo</button>
            <ul style={{padding:"0", margin:"0", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start", backgroundColor:"#ffd2d2ff", borderRadius:"10px", padding:"1rem", marginTop:"1rem"}}>
                {todos.map((todo, index)=>(
                    <li style={{listStyleType:"none", fontSize:"2rem", margin:"0.5rem 0 0 0", display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}} key={index}>
                        <button onClick={()=>deleteTodo(index)} style={{padding:"0", fontSize:"1.4rem", fontWeight:"bold", borderRadius:"50%", cursor:"pointer", border:"none", backgroundColor:"#ffd2d2ff"}}><i className="fa-solid fa-trash"></i></button>
                        <span>{todo}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

let styles={
    backgroundColor:"#e2b5b5ff",
    borderRadius:"10px",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:"45vw",
    padding:"2rem",
}
