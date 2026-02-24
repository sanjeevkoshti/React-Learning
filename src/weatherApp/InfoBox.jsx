import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ weather }) {
    const INIT_URL = "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://media.istockphoto.com/id/1296441088/photo/death-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=Adi2flWXyutkjMNeNh5LZd1Z4hG01sjX6QAe7JLhbLo=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

    return (
        <div className="infoBox" style={{ textAlign: "center", display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={weather.humidity > 80 ? RAIN_URL : weather.temp > 15 ? HOT_URL : COLD_URL}
                    title="weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weather.name} {weather.humidity > 80 ? <ThunderstormIcon /> : weather.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        <div>Temperature: {weather.temp}&deg;C</div>
                        <div>Humidity: {weather.humidity}</div>
                        <div>Min Temp: {weather.tempMin}&deg;C</div>
                        <div>Max Temp: {weather.tempMax}&deg;C</div>
                        <div style={{ marginTop: "0.5rem" }}>
                            The weather can be described as <i>{weather.weather}</i> and feels like {weather.feelsLike}&deg;C
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}