import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "97ed1ca6b9b07a841e3a5eb9c319fd24";
    let getWeather = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);
        let result = {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        getWeather();
        setCity("");
    }
    return(
        <div className='searchBox'>
            <h3>Search for the weather</h3>
            <form className='form' onSubmit={onSubmit}>
                <TextField 
                id="city" 
                label="Search City" 
                variant="outlined" 
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}