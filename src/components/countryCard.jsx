import {
    Card, CardContent, CardMedia, Typography
} from '@mui/material';
import { useNavigate, Link } from "react-router-dom";

export default function CountryCard(props) {
    const navigate = useNavigate();

    return (
        <div class="col-xxl-4">
            <Link to="/details">
                <Card sx={{
                    height: "340px",
                    boxShadow: "0 1px 5px -3px #858585",
                    marginBottom: "40px",
                    marginTop: "9px"
                }}
                    onClick={() => navigate("/")}
                >
                    <CardMedia
                        component="img"
                        image={require("../flags/" + props.country.img)}
                        height="170px"
                    />
                    <CardContent sx={{
                        p: 3
                    }}>
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                            {props.country.name}
                        </Typography>
                        <Typography variant='subtitle2' display='block'>
                            <strong>Population: </strong>{props.country.population}
                        </Typography>
                        <Typography variant='subtitle2' display='block'>
                            <strong>Region: </strong>{props.country.region}
                        </Typography>
                        <Typography variant='subtitle2' display='block'>
                            <strong>Capital: </strong>{props.country.capital}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}