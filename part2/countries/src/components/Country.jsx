const Country = ({ name, capital, area, languages }) => {
    const languagesArray = languages ? Object.entries(languages) : [];

    return (
        <>
            <h1>{name}</h1>
            {capital && <p>Capital: {capital}</p>}
            {area && <p>Area: {area} km²</p>}
            {languagesArray.length > 0 && (
                <>
                    <p style={{ fontWeight: "bold" }}>Languages:</p>
                    <ul>
                        {languagesArray.map(([code, language]) => (
                            <li key={code}>{language}</li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Country;
