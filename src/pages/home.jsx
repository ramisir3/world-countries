import './home.css';
import Countries from '../mock-countries.json'
import mockCountry from '../mock-details.json'
import FilterDropMenu from '../components/filterDropMenu';
import { InputBase, useTheme } from '@mui/material';
import CountryCard from '../components/countryCard';
import FavListItem from '../components/favouriteListItem';
import { Container, Box } from '@mui/system';



export default function Home() {
    const theme = useTheme();
    const keys = Object.keys(Countries);
    const cards = [];
    keys.forEach((key) => {
        cards.push(
            <CountryCard country={Countries[key]}></CountryCard>
        )
    })
    const fav = <FavListItem country={mockCountry} />;
    document.getElementsByTagName("body")[0].style.backgroundColor = theme.palette.secondary.main;
    document.getElementById("root").style.backgroundColor = theme.palette.secondary.main;

    return (
        <Container fixed className="main" sx={{
            backgroundColor: theme.palette.secondary.main,
        }}>
            <div
                class="search-and-filter d-xl-flex justify-content-xl-between flex-xl-nowrap mx-auto align-items-baseline mb-xl-0 mb-5">
                <div class="search-bar mb-3 mb-xl-0" name="dark-shadow" sx={{ backgroundColor: theme.palette.primary.main, }}>
                    <Box sx={{ display: "flex", backgroundColor: theme.palette.primary.main, width: "100%", height: "100%", alignItems: "center" }}>
                        <i name="icon" class="fa-solid fa-search px-4 search-bar-icon" ></i>
                        <InputBase
                            sx={{
                                ml: 1, flex: 1,
                            }}
                            placeholder="Search for a country..."
                            inputProps={{ 'aria-label': 'search for a country...' }}
                        />
                    </Box>
                </div>
                <FilterDropMenu>
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
                    {cards}
                </div>
            </div>
        </Container>
    );
}