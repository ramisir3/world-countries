import { Button, useTheme } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from "react";
import { getCountryByCode } from "../countryAPI";

let bordersFlag = false;

export default function Details() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { handle } = useParams();
    const [curHandle, setCurHandle] = useState(handle);
    const [country, setCountry] = useState(null);
    const [countryInfo, setCountryInfo] = useState("Loading Info");
    const [borders, setBorders] = useState([]);


    useEffect(() => {
        async function fetchData() {
            let response = await getCountryByCode(handle);
            setCountry(response[0]);
        }
        async function fetchBorderCountry(code) {
            let response = await getCountryByCode(code);
            return response[0];
        }

        if (handle !== curHandle) {
            setCountry(null);
            setCountryInfo("Loading Info")
            setBorders([]);

        }
        if (country == null) {
            setCurHandle(handle);
            fetchData();
            bordersFlag = false;
        } else {
            let borderCountries = country.borders;
            if (borderCountries && !bordersFlag) {
                borderCountries.forEach(async element => {
                    try {
                        let borderCountry = await fetchBorderCountry(element);
                        setBorders(borders => [...borders,
                        <Button variant="contained"
                            key={borderCountry.cca3}
                            sx={{ backgroundColor: theme.palette.primary.main, fontSize: "12px", fontWeight: 600, marginRight: 2 }}
                            onClick={() => navigate("/world-countries/details/" + borderCountry.cca3)}
                        > {borderCountry.name.common}
                        </Button>]
                        )
                    } catch (error) {
                        console.log(error);
                    }
                }
                );
                bordersFlag = true;
            } else {
                if (!bordersFlag) {
                    setBorders(
                        <Button variant="contained"
                            sx={{ backgroundColor: theme.palette.primary.main, fontSize: "12px", fontWeight: 600, marginRight: 2 }}
                        > None
                        </Button>);
                    bordersFlag = true;
                }
            }
            setCountryInfo(<div class="row">
                <div class="col-xl-5 col-sm-12 mt-4 p-0">
                    <Avatar variant="square" src={country.flags.svg} alt={country.name.common} sx={{
                        width: { xs: window.innerWidth - (window.innerWidth / 15), lg: "90%" },
                        height: { xs: window.innerHeight / 3, lg: "300px" },
                        padding: 2
                    }}></Avatar>
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
                            {borders}
                        </div>
                    </div>
                </div>
            </div >);
        }
    }, [handle, country, borders, theme])

    document.getElementsByTagName("body")[0].style.backgroundColor = (theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main);
    document.getElementById("root").style.backgroundColor = (theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main);
    return (
        <main class="container"
            style={{
                marginTop: "120px",
                backgroundColor: (theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main)
            }}>
            <div>
                <Button onClick={() => navigate("/world-countries")}
                    variant="contained" startIcon={<KeyboardBackspaceIcon />} sx={{
                        backgroundColor: theme.palette.primary.main,
                    }}> Back </Button>
            </div>
            {countryInfo}
        </main>
    );
}