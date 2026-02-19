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
    const toUpper=()=>{
        setTodos(
            todos.map(
                (todo) => 
                    todo.toUpperCase()
            )
        );
    }
    const toUpperOne=(index)=>{
        setTodos(
            todos.map(
                (todo, idx) => 
                    idx==index?todo.toUpperCase():todo
            )
        );
    }
    return(
        <div style={styles}>
            <h1>Todo List</h1>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter Todo" style={inputStyle}/>
            <div>
                <button onClick={addTodo} style={btnStyle}>Add Todo</button>
                <button onClick={toUpper} style={btnStyle}>To Uppercase All</button> 
            </div>
            <ul style={ulStyle}>
                {todos.map((todo, index)=>(
                    <li style={liStyle} key={index}>
                        <button onClick={()=>deleteTodo(index)} style={deleteBtnStyle}><i className="fa-solid fa-trash"></i></button>
                        <button onClick={()=>toUpperOne(index)} style={deleteBtnStyle}><i className="fa-solid fa-arrows-up-to-line"></i></button>
                        <span>{todo}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

let deleteBtnStyle={
    padding:"0", 
    fontSize:"1.4rem", 
    fontWeight:"bold", 
    borderRadius:"50%", 
    cursor:"pointer", 
    border:"none", 
    backgroundColor:"#ffd2d2ff"
}
let liStyle={
    listStyleType:"none", 
    fontSize:"2rem", 
    margin:"0.5rem 0 0 0", 
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center", 
    gap:"1rem"
}
let ulStyle={
    padding:"0", 
    margin:"0", 
    display:"flex", 
    flexDirection:"column", 
    justifyContent:"center", 
    alignItems:"start", 
    backgroundColor:"#ffd2d2ff", 
    borderRadius:"10px", 
    padding:"1rem", 
    marginTop:"1rem"
}
let btnStyle={
    margin:"0 0.5rem",
    padding:"0.5rem 1rem", 
    fontSize:"1.2rem", 
    fontWeight:"bold", 
    borderRadius:"5px", 
    cursor:"pointer"
}
let inputStyle={
    padding:"0.5rem 1rem", 
    fontSize:"1.2rem", 
    fontWeight:"bold", 
    borderRadius:"5px", 
    cursor:"text", 
    margin:"1rem", 
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
