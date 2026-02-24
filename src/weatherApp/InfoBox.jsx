import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ weather }) {
    const INIT_URL = "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="infoBox" style={{ textAlign: "center", display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weather.name}
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