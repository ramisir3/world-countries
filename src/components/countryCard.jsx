import {
    Card, CardContent, CardMedia, IconButton, Typography, Box
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, Link } from "react-router-dom";

export default function CountryCard(props) {
    const navigate = useNavigate();

    return (
        <div class="col-lg-4">
            <Card sx={{
                height: { xs: (window.innerWidth / 2) + 200, md: "350px" },
                boxShadow: "0 1px 5px -3px #858585",
                marginBottom: "40px",
                marginTop: "9px"
            }}
            >
                <CardMedia
                    component="img"
                    image={require("../flags/" + props.country.img)}
                    sx={{ height: { xs: window.innerWidth / 2, md: "170px"} }}
                    onClick={() => navigate("/world-countries/details")}
                />
                <CardContent sx={{
                    p: 3
                }}>
                    <Box onClick={() => navigate("/world-countries/details")}>
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }} noWrap="true">
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
                    </Box>
                    <Box sx={{
                        display: { xs: "flex", lg: "none" },
                        flexDirection: "row-reverse",
                    }}>
                        <IconButton edge="end" aria-label="favourite"
                            sx={{
                                paddingRight: 2
                            }}>
                            <StarIcon></StarIcon>
                        </IconButton>
                    </Box>
                </CardContent>

            </Card>
        </div >
    )
}
