import { InputLabel, Select, MenuItem, FormControl, useTheme } from '@mui/material';
import React from 'react';


export default function FilterDropMenu() {
    const theme = useTheme();
    const [filter, setFilter] = React.useState("All");

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <FormControl sx={{
            width: "180px",
            backgroundColor: theme.palette.primary.main,
        }}>
            <InputLabel id="filterByLabel" sx={{
                color: theme.palette.text,
            }}>
                Fitler by</InputLabel>
            <Select
                labelId="filterByLabel"
                id="filter"
                value={filter}
                label="Fitler by"
                onChange={handleChange}
                sx={{ backgroundColor: theme.palette.primary.main }}
            >
                <MenuItem value="All" sx={{ backgroundColor: theme.palette.primary.main }}>All</MenuItem>
                <MenuItem value="Africa" sx={{ backgroundColor: theme.palette.primary.main }}>Africa</MenuItem>
                <MenuItem value="Americas" sx={{ backgroundColor: theme.palette.primary.main }}>Americas</MenuItem>
                <MenuItem value="Asia" sx={{ backgroundColor: theme.palette.primary.main }}>Asia</MenuItem>
                <MenuItem value="Europe" sx={{ backgroundColor: theme.palette.primary.main }}>Europe</MenuItem>
                <MenuItem value="Oceania" sx={{ backgroundColor: theme.palette.primary.main }}>Oceania</MenuItem>
                <MenuItem value="Favourites" sx={{ backgroundColor: theme.palette.primary.main }}>Favourites</MenuItem>
            </Select>
        </FormControl>
    );
}