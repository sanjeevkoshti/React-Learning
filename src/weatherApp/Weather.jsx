import WeatherApp from "./WeatherApp";

export default function Weather(){
    return(
        <div style={weatherStyle}>
            <WeatherApp/>
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