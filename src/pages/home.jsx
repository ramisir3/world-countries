import './home.css';
import Countries from '../mock-countries.json'
import FilterDropMenu from '../components/filterDropMenu';
import { InputBase } from '@mui/material';
import CountryCard from '../components/countryCard';


export default function Home() {
    const keys = Object.keys(Countries);
    const cards = [];
    keys.forEach((key) => {
        cards.push(
            <CountryCard country={Countries[key]}></CountryCard>
        )
    })
    return (
        <main class="main container" style={{ padding: "1rem 0", marginTop: "100px", }}>
            <div
                class="search-and-filter d-xxl-flex justify-content-xxl-between flex-xxl-nowrap mx-auto align-items-center mb-xxl-0 mb-5">
                <div class="search-bar" name="dark-shadow">
                    <i name="icon" class="fa-solid fa-search px-4" ></i>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for a country..."
                        inputProps={{ 'aria-label': 'search for a country...' }}
                    />
                </div>
                <FilterDropMenu>
                </FilterDropMenu>
            </div>
            <div class="mt-5 pt-5 pt-xl-0 mt-xxl-4 d-xxl-flex">
                <div class="favorites-section d-none d-xxl-block mt-2 me-4 flex-shrink-0 ps-4 pt-4 pe-1" name="dark">
                    <div>
                        <h5 class="h5-custom">Favourites</h5>
                    </div>
                    <div class="favorites d-block scroll-down light-bar" id="favorites-list"></div>
                </div>
                <div class="row gx-5 countries scroll-down" id="countriesBody">
                    {cards}
                </div>
            </div>
        </main>
    );
}