import { InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React from 'react';


export default function FilterDropMenu() {
    const [filter, setFilter] = React.useState("Filter By");

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <FormControl sx={{ width: "180px", boxShadow: "0 3px 10px -7px #858585", }}>
            <InputLabel id="filterByLabel" sx={{
                color: "black"
            }}>
                Fitler by</InputLabel>
            <Select
                labelId="filterByLabel"
                id="filter"
                value={filter}
                label="Fitler by"
                onChange={handleChange}
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
                <MenuItem value="Favourites">Favourites</MenuItem>
            </Select>
        </FormControl>
    );
}