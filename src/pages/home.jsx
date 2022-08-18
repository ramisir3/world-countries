import './home.css';
import mockCountry from '../mock-details.json'
import FilterDropMenu from '../components/filterDropMenu';
import { InputBase, useTheme } from '@mui/material';
import CountryCard from '../components/countryCard';
import FavListItem from '../components/favouriteListItem';
import { Container, Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName } from '../countryAPI';

export default function Home() {
    const [countries, setCountries] = useState(null);
    const [filteredCountriesResult, setFilteredCountriesResult] = useState([]);
    const [countriesCards, setCountriesCards] = useState([]);
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const theme = useTheme();

    useEffect(() => {
        async function fetchData() {
            let response = await getAllCountries();
            setCountries(response);
            setFilteredCountriesResult(response);
        }
        if (countries == null) {
            setCountriesCards(<Box sx={{ marginLeft: 5 }}>Loading...</Box>)
            fetchData();
        } else {
            if (countries.length > 0) {
                const cards = [];

                countries.forEach((country) => {
                    cards.push(
                        <CountryCard country={country}></CountryCard>
                    )
                })
                setCountriesCards(cards);
            } else {
                const noDataResponse = <div>No Data Found</div>
                setCountriesCards(noDataResponse);
            }
        }
    }, [countries]);

    const fav = <FavListItem country={mockCountry} />;
    document.getElementsByTagName("body")[0].style.backgroundColor = theme.palette.secondary.main;
    document.getElementById("root").style.backgroundColor = theme.palette.secondary.main;


    function filterCountries(filterValue) {
        setFilter(filterValue);
    }

    function searchCountries(ev) {
        setSearchQuery(ev.target.value);
    }

    useEffect(() => {
        async function getSearchResult() {
            if (searchQuery) {
                try {
                    let response = await getCountryByName(searchQuery);
                    setFilteredCountriesResult(response);
                } catch (error) {
                    setFilteredCountriesResult([]);
                }
            } else {
                setFilteredCountriesResult(countries);
            }
        }
        getSearchResult();
    }, [filter, searchQuery]);

    useEffect(() => {
        const cards = [];
        if (filteredCountriesResult !== null && filteredCountriesResult.length > 0) {
            if (filter === "All") {
                filteredCountriesResult.forEach((country) => {
                    cards.push(
                        <CountryCard country={country}></CountryCard>
                    )
                })
            } else if (filter === "Favourites") {

            } else {
                filteredCountriesResult.forEach((country) => {
                    if (country.region === filter) {
                        cards.push(
                            <CountryCard country={country}></CountryCard>
                        )
                    }
                })
            }
            setCountriesCards(cards);
        } else if (countries != null && countries.length > 0) {
            console.log("no results")
            setCountriesCards(<Box sx={{ marginLeft: 5 }}>No Results Found</Box>)
        }
    }, [filteredCountriesResult])

    return (
        <Container fixed className="main" sx={{
            backgroundColor: theme.palette.secondary.main,
        }}>
            <div
                class="search-and-filter d-xl-flex justify-content-xl-between flex-xl-nowrap mx-auto align-items-baseline mb-xl-0 mb-5"
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                }}>
                <div class="search-bar mb-3 mb-xl-0" name="dark-shadow" sx={{ backgroundColor: theme.palette.primary.main, }}>
                    <Box sx={{ display: "flex", backgroundColor: theme.palette.primary.main, width: "100%", height: "100%", alignItems: "center" }}>
                        <i name="icon" class="fa-solid fa-search px-4 search-bar-icon" ></i>
                        <InputBase
                            sx={{
                                ml: 1, flex: 1,
                            }}
                            placeholder="Search for a country..."
                            inputProps={{ 'aria-label': 'search for a country...' }}
                            onChange={searchCountries}
                        />
                    </Box>
                </div>
                <FilterDropMenu onFilterChange={filterCountries}>
                </FilterDropMenu>
            </div>
            <div class="pt-xl-0 mt-xl-4 d-xl-flex">
                <Box className="favorites-section d-none d-xl-block mt-2 me-4 flex-shrink-0 ps-4 pt-4 pe-1" name="dark"
                    sx={{
                        backgroundColor: theme.palette.primary.main
                    }}>                    
                    <div>
                        <h5 class="h5-custom">Favourites</h5>
                    </div>
                    <div class="favorites d-block scroll-down light-bar" id="favorites-list">
                        {fav}
                    </div>
                </Box>
                <div class="row gx-5 countries scroll-down" id="countriesBody">
                    {countriesCards}
                </div>
            </div>
        </Container>
    );
}