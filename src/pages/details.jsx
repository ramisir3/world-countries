import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import country from "../mock-details.json"
import './details.css';
import { useNavigate } from "react-router-dom";


export default function Details() {
    const navigate = useNavigate();
    return (
        <main class="container" style={{ marginTop: "120px" }}>
            <div>
                <Button onClick={() => navigate("/")}
                    variant="contained" startIcon={<KeyboardBackspaceIcon />} sx={{ backgroundColor: "white", color: "black" }}> Back </Button>
            </div>
            <div class="row mt-5 pt-xxl-0 pt-5">
                <div class="col-xxl-5 col-sm-12 mb-5 mb-xxl-0">
                    <img src={country.flags.svg} alt={country.name.common} class="flag-img-details"></img>
                </div>
                <div class="col-xl-6 mt-5 ">
                    <div class="country-info row">
                        <h2 name="text" class="h2-custom">{country.name.official}</h2>
                        <div class="col-xl">
                            <div name="text" class="py-1 country-info-text"><strong>Native Name: </strong> {Object.values(country.name.nativeName)[0].common}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Population: </strong> {country.population.toLocaleString()}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Region: </strong> {country.region}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Capital: </strong> {country.capital || "None"}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Sub Region: </strong> {country.subregion}</div>
                        </div>
                        <div class="col-xl mt-5 mt-xxl-0">
                            <div name="text" class="py-1 country-info-text"><strong>Top Level Domain: </strong> {country.tld}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Currencies: </strong> {Object.values(country.currencies).map(el => el.name).join(",")}</div>
                            <div name="text" class="py-1 country-info-text"><strong>Languages: </strong> {Object.values(country.languages).join(", ")}</div>
                        </div>
                    </div>
                    <div name="text" class="border-countries mt-3">
                        <div class="border-text mt-1"><strong>Border Countries: </strong></div>
                        <div class="countries-btns">
                            <Button variant="contained" sx={{ backgroundColor: "white", color: "black", fontSize: "12px", fontWeight: 600, marginRight: 2 }}> Jordan </Button>
                            <Button variant="contained" sx={{ backgroundColor: "white", color: "black", fontSize: "12px", fontWeight: 600, marginRight: 2 }}> Egypt </Button>
                        </div>
                    </div>
                </div>`
            </div>
        </main>
    );
}