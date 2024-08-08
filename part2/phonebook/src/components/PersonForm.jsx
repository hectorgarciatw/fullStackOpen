const PersonForm = ({ name, number, addName, addNumber, saveName }) => {
    return (
        <form onSubmit={saveName}>
            <div>
                name: <input value={name} onChange={addName} />
            </div>
            <div>
                number: <input value={number} onChange={addNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;
