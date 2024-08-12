import { useState } from "react";
import Weather from "./Weather";
import Languages from "./Languages";

const Country = ({ name, capital, area, languages, flag, countries }) => {
    //States
    const [showContent, setShowContent] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    //Array of languages
    const languagesArray = languages ? Object.entries(languages) : [];

    //Set the info of a Country
    const showCountry = (countryName) => {
        setShowContent(!showContent);
        const country = countries.find((c) => c.name.common === countryName);
        setSelectedCountry(country);
    };

    return (
        <>
            <div className="entry">
                <h1>{name}</h1>
                {countries && <button onClick={() => showCountry(name)}>show</button>}
            </div>

            {capital && <p>Capital: {capital}</p>}
            {area && <p>Area: {area} km²</p>}
            {languagesArray.length > 0 && <Languages languages={languagesArray} />}
            {flag && <img src={flag} alt={`${name} flag`} />}
            {flag && <Weather name={name} />}

            {/* Section of show by Country*/}
            {selectedCountry && selectedCountry.name.common === name && (
                <div>
                    <p>Capital: {selectedCountry.capital[0]}</p>
                    <p>Area: {selectedCountry.area} km²</p>
                    {selectedCountry.languages && <Languages languages={Object.entries(selectedCountry.languages)} />}
                    <Weather name={selectedCountry.name.common} />
                </div>
            )}
        </>
    );
};

export default Country;
