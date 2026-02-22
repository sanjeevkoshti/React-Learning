import SearchBox from "./SearchBox";
export default function Weather(){
    return(
        <div style={weatherStyle}>
            <SearchBox/>
        </div>
    );
}

let weatherStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
}