import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weather, setWeather] = useState({});
    let changeUpdate = (info) => {
        setWeather(info);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox changeUpdate={changeUpdate}/>
            <InfoBox weather={weather}/>
        </div>
    );
}