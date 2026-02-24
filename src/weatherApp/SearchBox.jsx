import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState, useEffect } from 'react';
export default function SearchBox({ changeUpdate }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "97ed1ca6b9b07a841e3a5eb9c319fd24";
    let [city, setCity] = useState("Athani");
    let [error, setError] = useState(false);

    let getWeather = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let data = await response.json();
            let result = {
                name: data.name,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            setError(false);
            return result;
        } catch (err) {
            setError(true);
            return null;
        }
    }

    useEffect(() => {
        const fetchInitialWeather = async () => {
            let info = await getWeather();
            if (info) {
                changeUpdate(info);
                setCity("");
            }
        };
        fetchInitialWeather();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        let info = await getWeather();
        if (info) {
            changeUpdate(info);
            setCity("");
        }
    }
    return (
        <div className='searchBox'>
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
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}