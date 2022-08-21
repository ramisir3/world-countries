import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useNavigate, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function FavListItem(props) {
    const navigate = useNavigate();

    return (
        <ListItem sx={{
            padding: 0,
            paddingRight: "10px"
        }}
        >
            <ListItemAvatar onClick={() => navigate("/world-countries/details/" + props.country.cca3)}>
                <Avatar variant="square" alt={props.country.name.common} src={props.country.flags.svg}
                    sx={{
                        borderRadius: "10px",
                        width: "40px",
                        height: "25px"
                    }} />

            </ListItemAvatar>
            <ListItemText sx={{ fontWeight: 700 }}
                primary={props.country.name.common}
                onClick={() => navigate("/world-countries/details/" + props.country.cca3)}
            />
            <IconButton edge="end" aria-label="delete"
                onClick={props.onDelete}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}