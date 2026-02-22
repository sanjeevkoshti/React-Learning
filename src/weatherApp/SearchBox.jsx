export default function SearchBox(){
    return(
        <div>
            <input type="text" placeholder="Search..." style={style}/>
        </div>
    );
}

let style = {
    fontSize: "1.3rem",
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
}
