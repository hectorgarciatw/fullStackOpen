import { useState, useEffect } from "react";

//Components
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

//Services
import personService from "./services/persons";

const App = () => {
    //States
    const [persons, setPersons] = useState([]);
    const [successMsg, setSuccessMsg] = useState(null);

    useEffect(() => {
        personService.getAll().then((persons) => {
            setPersons(persons);
        });
    }, []);

    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filterName, setFilterName] = useState("");

    //Delete a person
    const handleDelete = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService
                .deletePerson(id)
                .then(() => {
                    setSuccessMsg(`Deleted ${name}`);
                    setTimeout(() => {
                        setSuccessMsg(null);
                    }, 2000);
                    setPersons(persons.filter((person) => person.id !== id));
                })
                .catch(() => {
                    alert("The person was already removed from the server");
                    setPersons(persons.filter((person) => person.id !== id));
                });
        }
    };

    //Update phone of a person
    const handleUpdate = (id, name) => {
        if (window.confirm(`Update ${name}?`)) {
            const personObj = { name: newName, number: newNumber };
            personService
                .update(id, personObj)
                .then((updatedPerson) => {
                    setSuccessMsg(`Updated phone of ${name}`);
                    setTimeout(() => {
                        setSuccessMsg(null);
                    }, 2000);
                    setPersons(persons.map((person) => (person.id !== id ? person : updatedPerson)));
                })
                .catch(() => {
                    setSuccessMsg(`Informaction of ${name} has already been removed from server`);
                    setTimeout(() => {
                        setSuccessMsg(null);
                    }, 2000);
                    setPersons(persons.filter((p) => p.id !== id));
                });
        }
    };

    //Update the name state
    const addName = (event) => {
        setNewName(event.target.value);
    };

    //Update the number state
    const addNumber = (event) => {
        setNewNumber(event.target.value);
    };

    //Save the name
    const saveName = (event) => {
        event.preventDefault();
        const personObj = { name: newName, number: newNumber };
        //A new persons arrives
        if (!persons.some((person) => person.name === personObj.name)) {
            personService.create(personObj).then((person) => {
                setPersons(persons.concat(person));
                setSuccessMsg(`Added ${person.name}`);
                setTimeout(() => {
                    setSuccessMsg(null);
                }, 3000);
            });
        }
        //New phone for a person already added
        else if (persons.some((person) => person.name === personObj.name && person.number != personObj.number)) {
            const personToUpdate = persons.find((person) => person.name === personObj.name);
            if (personToUpdate) {
                handleUpdate(personToUpdate.id, personToUpdate.name);
            }
        }
        //Person and phone already stored, nothing to do
        else {
            alert(`${newName} is already added to phonebook and the new number is already stored`);
        }
        setNewName("");
        setNewNumber("");
    };

    const filterPersons = (event) => {
        setFilterName(event.target.value);
    };

    //Filtered persons
    const personsToShow = filterName ? persons.filter((person) => person.name.toLowerCase().startsWith(filterName.toLowerCase())) : persons;

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification msg={successMsg} />
            <Filter name={filterName} persons={filterPersons} />
            <h3>add a new</h3>
            <PersonForm name={newName} number={newNumber} addName={addName} addNumber={addNumber} saveName={saveName} />
            <h3>Numbers</h3>
            {personsToShow.map((person) => (
                <Person key={person.id} id={person.id} name={person.name} number={person.number} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default App;
