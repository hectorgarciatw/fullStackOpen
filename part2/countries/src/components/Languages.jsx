const Languages = ({ languages }) => {
    return (
        <>
            {languages.length > 0 && (
                <>
                    <p style={{ fontWeight: "bold" }}>Languages:</p>
                    <ul>
                        {languages.map(([code, language]) => (
                            <li key={code}>{language}</li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Languages;
