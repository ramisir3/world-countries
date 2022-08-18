import axios from "axios";


export async function getAllCountries() {
    const baseURL = "https://restcountries.com/v3.1/all";

    const resp = await axios.get(baseURL);
    if (resp.status === 404) {
        return [];
    }
    return resp.data;
}

export async function getCountryByCode(code) {
    const baseURL = "https://restcountries.com/v3.1/alpha/" + code;

    const resp = await axios.get(baseURL);
    if (resp.status === 404) {
        return [];
    }
    return resp.data;
}

export async function getCountryByName(name) {
    const baseURL = "https://restcountries.com/v3.1/name/" + name;
    
    const resp = await axios.get(baseURL);
    if (resp.status === 404) {
        return [];
    }
    return resp.data;
}