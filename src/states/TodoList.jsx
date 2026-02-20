import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
    const [todos, setTodos]=useState([{task:"Sample task",id:uuidv4(), isDone:false}]);
    const [newTodo, setNewTodo]=useState("");
    const addTodo=()=>{
        setTodos([...todos, {task:newTodo, id:uuidv4(), isDone:false}]);
        setNewTodo("");
    }
    let deleteTodo=(idx)=>{
        setTodos(todos.filter((todo)=>todo.id!=idx));
    }
    let toUpper = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        );
    }
    let toUpperOne=(idx)=>{
        setTodos((todos) =>
            todos.map((todo) => {
                if(todo.id === idx){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                }
                return todo;
            })
        );
    }
    let taskDoneTogle=(idx)=>{
        setTodos((todos) =>
            todos.map((todo) => {
                if(todo.id === idx){
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
                }
                return todo;
            })
        );
    }
    let allTaskDone=()=>{
        setTodos((todos) =>
            todos.map((todo) => {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    }
            })
        );
    }
    return(
        <div style={styles}>
            <h1>Todo List</h1>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter Todo" style={inputStyle}/>
            <button onClick={addTodo} style={addBtnStyle}>Add Todo</button>
            <div>
                <button onClick={toUpper} style={btnStyle}>To Uppercase All</button>
                <button onClick={allTaskDone} style={btnStyle}>All Task Done</button>
            </div>
            <ul style={ulStyle}>
                {todos.map((todo)=>(
                    <li style={liStyle} key={todo.id}>
                        <button onClick={()=>deleteTodo(todo.id)} style={deleteBtnStyle}><i className="fa-solid fa-trash"></i></button>
                        <button onClick={()=>toUpperOne(todo.id)} style={deleteBtnStyle}><i className="fa-solid fa-arrows-up-to-line"></i></button>
                        <button onClick={()=>taskDoneTogle(todo.id)} style={deleteBtnStyle}><i className="fa-regular fa-circle-check" style={todo.isDone?{color:"green"}:{color:"red"}}></i></button>
                        <span style={todo.isDone?{color:"gray", textDecoration:"line-through"}:{}}>{todo.task}</span>
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
let addBtnStyle={
    margin:"0 0 0.5rem 0",
    padding:"0.5rem 1rem", 
    fontSize:"1.2rem", 
    fontWeight:"bold", 
    borderRadius:"5px", 
    cursor:"pointer",
    backgroundColor:"#95ff7aff"
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
    margin:"0 0 0.5rem 0", 
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
