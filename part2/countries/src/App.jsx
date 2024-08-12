import { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

// Components
import Country from "./components/Country";

// Urls
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

function App() {
    // States
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        axios
            .get(`${baseUrl}`)
            .then((res) => {
                setCountries(res.data);
                setAllCountries(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const updateInput = (event) => {
        const inputValue = event.target.value.toLowerCase();
        setTextInput(event.target.value);

        if (inputValue === "") {
            setCountries(allCountries);
        } else {
            const filteredCountries = allCountries.filter((country) => country.name.common.toLowerCase().startsWith(inputValue));
            setCountries(filteredCountries);
        }
    };

    return (
        <>
            <p>
                find countries <input type="text" value={textInput} onChange={updateInput} />{" "}
            </p>

            {countries.length > 10 ? (
                <p>Too many matches, specify another filter.</p>
            ) : countries.length === 1 ? (
                <Country name={countries[0].name.common} capital={countries[0].capital[0]} area={countries[0].area} languages={countries[0].languages} flag={countries[0].flags.png} />
            ) : (
                countries.map((country) => <Country key={country.name.common} name={country.name.common} countries={countries} />)
            )}
        </>
    );
}

export default App;
