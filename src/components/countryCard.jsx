import {
    Card, CardContent, CardMedia, IconButton, Typography, Box, useTheme
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import { useDrag } from 'react-dnd'

export default function CountryCard(props) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: {
            country: props.country,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <div class="col-lg-4">
            <Card 
            ref={drag}
            sx={{
                height: { xs: (window.innerWidth / 2) + 200, md: "350px" },
                boxShadow: "0 1px 5px -3px #858585",
                marginBottom: "40px",
                marginTop: "9px",
                backgroundColor: theme.palette.primary.main,
            }}
            >
                <CardMedia
                    component="img"
                    image={props.country.flags.svg}
                    sx={{ height: { xs: window.innerWidth / 2, md: "170px" } }}
                    onClick={() => navigate("/world-countries/details/" + props.country.cca3)}
                />
                <CardContent sx={{
                    p: 3
                }}>
                    <Box onClick={() => navigate("/world-countries/details/" + props.country.cca3)}>
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }} noWrap="true">
                            {props.country.name.common}
                        </Typography>
                        <Typography variant='subtitle2' display='block'>
                            <strong>Population: </strong>{props.country.population.toLocaleString()}
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
                            onClick={props.onToggleFav}
                            sx={{
                                paddingRight: 2
                            }}>
                            <StarIcon
                                sx={{ color: props.isFav ? "#FFD700" : "primary" }}>

                            </StarIcon>
                        </IconButton>
                    </Box>
                </CardContent>

            </Card>
        </div >
    )
}
