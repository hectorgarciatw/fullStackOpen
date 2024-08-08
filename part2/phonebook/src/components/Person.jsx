import personService from '../services/persons';

const Person = ({ id, name, number, onDelete }) => {
    return (
        <p>
            {name} {number} <button onClick={() => onDelete(id, name)}>delete</button>
        </p>
    );
};

export default Person;
