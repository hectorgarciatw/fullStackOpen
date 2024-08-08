const Filter = ({ name, persons }) => {
    return (
        <p>
            filter shown with <input value={name} onChange={persons} />
        </p>
    );
};

export default Filter;
